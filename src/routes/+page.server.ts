import type { PageServerLoad } from './$types';
import { slugFromPath } from '$lib/slugFromPath';

const MAX_POSTS = 5;

export const load: PageServerLoad = async (_) => {
	const modules = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`);

	const postPromises = Object.entries(modules).map(([path, resolver]) =>
		resolver().then(
			(post) =>
				({
					slug: slugFromPath(path),
					...(post as unknown as App.MdsvexFile).metadata
				} as App.Post)
		)
	);

	const posts = await Promise.all(postPromises);
	const publishedPosts = posts.filter((post) => post.published).sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1)).slice(0, MAX_POSTS);

	return { posts: publishedPosts };
};
