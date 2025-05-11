<script lang="ts">
	import type { PageData } from './$types';
	import Tag from '$lib/components/Tag.svelte';
	import PageBreak from '$lib/components/PageBreak.svelte';
	import SelectedTag from '$lib/components/SelectedTag.svelte';
	import Post from '$lib/components/Post.svelte';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let data: PageData;

	let query = "";
	let titles = data.posts.map(x => x.title).slice(0, 3).join(" • ");
	let visible = false;

	onMount(() => {
		visible = true;
	});

	const filterByTag = (data, query: string) => {
		if(data.tag === null) {
			return data.posts.filter((p: Post) => p.title.toLowerCase().includes(query.toLowerCase()))
		}
		return data.posts.filter((p: Post) => p.tags.includes(data.tag) && (p.tags.filter((t: string) => t.includes(query.toLowerCase())).length > 0 || p.title.toLowerCase().includes(query.toLowerCase())))
	}
</script>

<svelte:head>
	<title>Writing | Ritankar Saha</title>
	<meta name="description" content={titles} />
</svelte:head>

<div class="min-h-screen">
	<!-- Hero Section -->
	<section class="relative py-24 overflow-hidden">
		<div class="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-70"></div>
		<div class="absolute inset-0 opacity-20">
			<div class="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]"></div>
		</div>
		
		<div class="container mx-auto px-6 relative z-10">
			{#if visible}
				<div class="max-w-4xl mx-auto text-center" in:fly={{ y: 50, duration: 1000 }}>
					<h1 class="text-5xl md:text-6xl font-bold mb-8">
						<span class="gradient-text">Writing</span>
					</h1>
					
					<p class="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
						My personal logs and thoughts on backend systems, Web3, cloud computing, and DevOps.
					</p>
				</div>
			{/if}
		</div>
	</section>

	<!-- Tags Section -->
	<section class="py-12 bg-white">
		<div class="container mx-auto px-6">
			{#if visible}
				<div class="flex flex-wrap justify-center gap-3 mb-10 max-w-4xl mx-auto" in:fly={{ y: 30, duration: 800, delay: 200 }}>
					{#each data.tags.split(",") as t}
						{#if data.tag == t}
							<SelectedTag text={t} />
						{:else}
							<Tag text={t} />
						{/if}
					{/each}
				</div>
				
				<div class="max-w-2xl mx-auto mb-12" in:fly={{ y: 30, duration: 800, delay: 300 }}>
					<div class="relative">
						<input 
							type="text" 
							class="w-full h-14 pl-12 pr-5 rounded-full border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 text-gray-700 placeholder-gray-400 shadow-md"
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
			{/if}
		</div>
	</section>

	<!-- Posts Section -->
	<section class="py-10 bg-white">
		<div class="container mx-auto px-6">
			{#if visible}
				<div class="grid grid-cols-1 gap-10 max-w-4xl mx-auto">
					{#each filterByTag(data, query) as post, i (post.slug)}
						<div 
							in:fly={{ y: 20, duration: 600, delay: 400 + i * 100 }}
							class="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
						>
							<Post {post} />
						</div>
					{/each}
				</div>

				{#if filterByTag(data, query).length === 0}
					<div class="text-center py-20" in:fade={{ duration: 800, delay: 400 }}>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
						<p class="text-2xl text-gray-500 mb-2">No posts found matching your search.</p>
						<p class="text-gray-400">Try adjusting your search or filters.</p>
					</div>
				{/if}
			{/if}
		</div>
	</section>
</div>

<style>
	input {
		font-family: "Roboto Mono", monospace;
		font-size: 14px;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
	}
	
	:global(.gradient-text) {
		background: linear-gradient(to right, #0284c7, #0ea5e9);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
</style>