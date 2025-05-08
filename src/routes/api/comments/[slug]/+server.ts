import type { RequestHandler } from '@sveltejs/kit';
import { notion, COMMENTS_DB_ID } from '$lib/notion';

export const GET: RequestHandler = async ({ params }) => {
  const { slug } = params;
  const resp = await notion.databases.query({
    database_id: COMMENTS_DB_ID,
    filter: {
      property: 'Post Slug',
      rich_text: { equals: slug }
    },
    sorts: [{ property: 'Created At', direction: 'descending' }]
  });


  const pages = resp.results as any[];

  const comments = pages.map(page => ({
    id:        page.id,
    name:      page.properties.Name.title[0]?.plain_text ?? '',
    content:   page.properties.Content.rich_text[0]?.plain_text ?? '',
    createdAt: page.created_time
  }));

  return new Response(JSON.stringify(comments), {
    headers: { 'Content-Type': 'application/json' }
  });
};

export const POST: RequestHandler = async ({ request, params }) => {
  const { slug } = params;
  const { name, content } = await request.json();

  if (!name || !content) {
    return new Response('Missing name or content', { status: 400 });
  }

  const createdPage = await notion.pages.create({
    parent: { database_id: COMMENTS_DB_ID },
    properties: {
      Name: {
        title: [{ text: { content: name } }]
      },
      Content: {
        rich_text: [{ text: { content } }]
      },
      'Post Slug': {
        rich_text: [{ text: { content: slug } }]
      }
    }
  }) as any;

  const comment = {
    id:        createdPage.id,
    name,
    content,
    createdAt: createdPage.created_time
  };

  return new Response(JSON.stringify(comment), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
};
