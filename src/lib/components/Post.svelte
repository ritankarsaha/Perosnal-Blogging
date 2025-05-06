<script>
	export let post;
	import Tag from '$lib/components/Tag.svelte';
	import { formatDate } from '$lib/utils';
</script>

<div class="group">
	<a href={`/writing/${post.slug}`} class="block p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-primary-100 transition-all duration-300 hover:-translate-y-1">
		<h3 class="text-xl font-display font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200 mb-2">
			{post.title}
		</h3>
		<p class="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
		
		<div class="flex flex-wrap items-center gap-2">
			<span class="inline-flex items-center text-xs font-medium text-gray-500">
				<i class="far fa-calendar-alt mr-1.5"></i>
				{formatDate(new Date(post.date))}
			</span>
			
			<span class="text-gray-300 mx-1">•</span>
			
			<div class="flex flex-wrap gap-1.5">
				{#each post.tags as tag}
					<Tag text={tag} />
				{/each}
			</div>
		</div>
	</a>
</div>