// src/routes/writing/[slug]/+page.server.ts
import type { PageServerLoad } from './$types';
import { error }              from '@sveltejs/kit';
import { slugFromPath }       from '$lib/slugFromPath';
import { renderTweets }       from 'sveltekit-tweet/server';
import { notion, STATS_DB_ID } from '$lib/notion';

export const load: PageServerLoad = async ({ params }) => {
  const slug = params.slug;

// the post 
  const modules = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`);
  let match: { resolver?: any } = {};
  for (const [path, resolver] of Object.entries(modules)) {
    if (slugFromPath(path) === slug) {
      match = { resolver: resolver as any };
      break;
    }
  }
  const post = await match.resolver?.();
  if (!post || !post.metadata.published) throw error(404);

  let content  = post.default.render().html;
  let readTime = Math.round((content.replace(/<[^>]+>/g, '').length / 5) / 238);
  content       = await renderTweets(content);

// view count
  let views = 1;
  const statsQuery = await notion.databases.query({
    database_id: STATS_DB_ID,
    filter: {
      property: 'Post Slug',
      title: { equals: slug }
    }
  });

  if (statsQuery.results.length === 0) {
    // first time: create a new stats page
    await notion.pages.create({
      parent: { database_id: STATS_DB_ID },
      properties: {
        'Post Slug': { title: [{ text: { content: slug } }] },
        Views:      { number: 1 }
      }
    });
  } else {

    const page = statsQuery.results[0] as any;
    const current = page.properties.Views.number ?? 0;
    views = current + 1;
    await notion.pages.update({
      page_id: page.id,
      properties: {
        Views: { number: views }
      }
    });
  }

  return {
    content,
    readTime,
    frontmatter: post.metadata,
    slug,
    views           
  };
};
