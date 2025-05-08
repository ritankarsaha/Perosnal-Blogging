import type { RequestHandler } from '@sveltejs/kit';
import { notion }              from '$lib/notion';

export const DELETE: RequestHandler = async ({ params }) => {
  const { id } = params;
 
  await notion.pages.update({ page_id: id, archived: true });
  return new Response(null, { status: 204 });
};

export const PATCH: RequestHandler = async ({ request, params }) => {
    const { id } = params;            
    const { name, content } = await request.json();
  
    if (name == null && content == null) {
      return new Response('Nothing to update', { status: 400 });
    }
  

    const properties: Record<string, any> = {};
    if (name != null) {
      properties.Name = {
        title: [{ text: { content: name } }]
      };
    }
    if (content != null) {
      properties.Content = {
        rich_text: [{ text: { content } }]
      };
    }
  

    const updated = await notion.pages.update({
      page_id:    id,
      properties
    }) as any;
  
 
    return new Response(JSON.stringify({
      id,
      name:    name ?? (updated.properties.Name.title[0]?.plain_text),
      content: content ?? (updated.properties.Content.rich_text[0]?.plain_text)
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  };