<script lang="ts">
	import type { PageData } from './$types';
	import Tag from '$lib/components/Tag.svelte';
	import PageBreak from '$lib/components/PageBreak.svelte';
	import SelectedTag from '$lib/components/SelectedTag.svelte';
	import Post from '$lib/components/Post.svelte';
	import { fade } from 'svelte/transition';

	export let data: PageData;

	let query = "";
	let titles = data.posts.map(x => x.title).slice(0, 3).join(" • ");

	const filterByTag = (data, query: string) => {
		if(data.tag === null) {
			return data.posts.filter((p: Post) => p.title.toLowerCase().includes(query.toLowerCase()))
		}
		return data.posts.filter((p: Post) => p.tags.includes(data.tag) && (p.tags.filter((t: string) => t.includes(query.toLowerCase())).length > 0 || p.title.toLowerCase().includes(query.toLowerCase())))
	}
</script>

<svelte:head>
	<title>Writing Ritankar Saha</title>
	<meta name="description" content={titles} />
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h1 class="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
				Writing
			</h1>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				My personal logs and thoughts on backend systems, Web3, cloud computing, and DevOps.
			</p>
		</div>

		<div class="flex flex-wrap justify-center gap-2 mb-8 max-w-4xl mx-auto">
			{#each data.tags.split(",") as t}
				{#if data.tag == t}
					<SelectedTag text={t} />
				{:else}
					<Tag text={t} />
				{/if} 
			{/each}
		</div>

		<div class="max-w-2xl mx-auto mb-12">
			<div class="relative">
				<input 
					type="text" 
					class="w-full h-14 pl-12 pr-5 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-gray-700 placeholder-gray-400"
					placeholder="Search by title or tag..."
					bind:value={query}
				/>
				<div class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
				</div>
			</div>
		</div>

		<PageBreak />

		<div class="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
			{#each filterByTag(data, query) as post (post.slug)}
				<div 
					transition:fade="{{ duration: 300 }}"
					class="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
				>
					<Post post={post} />
				</div>
			{/each}
		</div>

		{#if filterByTag(data, query).length === 0}
			<div class="text-center py-16">
				<p class="text-2xl text-gray-500">No posts found matching your search.</p>
			</div>
		{/if}
	</div>
</div>

<style>
	input {
		font-family: "Roboto Mono", monospace;
		font-size: 14px;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
	}
</style>