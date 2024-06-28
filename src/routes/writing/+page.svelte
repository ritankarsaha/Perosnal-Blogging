<script lang="ts">
	import type { PageData } from './$types';
	import Tag from '$lib/components/Tag.svelte';
	import PageBreak from '$lib/components/PageBreak.svelte';
	import SelectedTag from '$lib/components/SelectedTag.svelte';
	import Post from '$lib/components/Post.svelte';
  
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
  
<div class="flex flex-col w-full items-center justify-center p-4">
	<h1 class="text-3xl font-bold text-gray-800 mb-6">Posts</h1>
	<div class="flex flex-row justify-center items-center flex-wrap mt-3 mb-6 w-full sm:w-4/5 lg:w-3/5 space-x-2 space-y-2">
		{#each data.tags.split(",") as t}
			{#if data.tag == t}
				<SelectedTag text={t} />
			{:else}
				<Tag text={t} />
			{/if} 
		{/each}
	</div>
	<input type="text" class="text-sm sm:text-base my-4 w-11/12 sm:w-2/3 lg:w-1/2 h-12 rounded-full border border-gray-300 px-5 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Search by title or tag..." bind:value={query} />
</div>
<PageBreak />
  
<div class="flex flex-col items-center w-full p-4 space-y-4">
	{#each filterByTag(data, query) as post}
		<div class="w-full sm:w-4/5 lg:w-3/5">
			<Post post={post} />
		</div>
	{/each}
</div>
  
<style>
	input {
		font-family: "Roboto Mono", monospace;
		font-size: 14px;
	}
</style>
