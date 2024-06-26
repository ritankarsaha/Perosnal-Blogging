import type { PageServerLoad } from './$types';
import { slugFromPath } from '$lib/slugFromPath';

export const load: PageServerLoad = async ({ url }) => {
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
	let publishedPosts = posts.filter((post) => post.published);

	const tags = publishedPosts.map(p => p.tags).flat(1).filter((elem, idx, self) => {
    return idx === self.indexOf(elem);
	})

	publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
	let tag = url.searchParams.get("tag");

	return { posts: publishedPosts, tags: tags.join(","), tag: tag };
};
