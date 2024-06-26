import type { PageServerLoad } from './$types';
import { slugFromPath } from '$lib/slugFromPath';
import { error } from '@sveltejs/kit';
import { renderTweets } from 'sveltekit-tweet/server';

export const load: PageServerLoad = async ({ params }) => {
	const modules = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`);

	let match: { path?: string; resolver?: App.MdsvexResolver } = {};

	for (const [path, resolver] of Object.entries(modules)) {
		if (slugFromPath(path) === params.slug) {
			match = { path, resolver: resolver as unknown as App.MdsvexResolver };
			break;
		}
	}

	const post = await match?.resolver?.();

	if (!post || !post.metadata.published) {
		throw error(404); // Couldn't resolve the post
	}

	let content = post.default.render().html;

	let readTime = Math.round(((content.replace(/(<([^>]+)>)/ig, '').length) / 5) / 238)

	content = await renderTweets(content);


	return {
		content,
		readTime,
		frontmatter: post.metadata
	};
};
