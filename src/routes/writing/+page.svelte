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
  <title>Writing Ritankar Saha </title> 
  <meta name="description" content={titles} />
</svelte:head> 

<div class="flex flex-col w-full items-center justify-center">
  <h1 class="text-center">Posts</h1>
  <div class="flex flex-row justify-center items-center flex-wrap mt-3 mb-1 w-[100%] sm:w-[80%] lg:w-[60%]">
  	{#each data.tags.split(",") as t}
		{#if data.tag == t}
			<SelectedTag text={t} />
		{:else}
			<Tag text={t} />
		{/if} 
	{/each}
  </div>
  <input type="text" class="!text-[13px] sm:!text-[15px] my-4 w-[95%] sm:w-2/3 h-12 rounded-2xl border border-[#ebebeb] px-5" placeholder="Search by title or tag..." bind:value={query} />
</div>
<PageBreak />

<div class="flex flex-col">
{#each filterByTag(data, query) as post}
	<Post post={post} />
{/each}
</div>

<style>
	input {
		font-family: "Roboto Mono";
		font-size: 14px;
	}
</style>
