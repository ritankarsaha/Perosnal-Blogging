<script lang="ts">
  import Tag from '$lib/components/Tag.svelte';
  import { formatDate } from '$lib/utils';

  export let data;
</script>

<svelte:head>
  <title>{data.frontmatter.title} Ritankar Saha </title> 
  <meta name="description" content={data.frontmatter.description} />
		<meta property="og:type" content="website" />
	  <meta property="og:url" content="" />
  	<meta property="og:title" content={`${data.frontmatter.title} • Ritankar Saha`} />
	  <meta property="og:description" content={data.frontmatter.description} />
  	<meta property="og:image" content="" />
	  <meta property="og:image:alt" content="Website logo" />

  	<!-- Twitter -->
  	<meta property="twitter:url" content="" />
  	<meta property="twitter:title" content={`${data.frontmatter.title} • Ritankar Saha`} />
	  <meta property="twitter:description" content={data.frontmatter.description} />
	  <meta
  	  property="twitter:image"
    	content=""
	  />
  	<meta
    	property="twitter:image:alt"
	    content="Website logo"
  	/>
</svelte:head> 

<h1>{data.frontmatter.title}</h1>
<div class="flex flex-row items-center mt-1 flex-wrap wrap">
  <code>{formatDate(new Date(data.frontmatter.date))}</code>
  <div class="mx-2 text-[#aaaaaa]">•</div>
  <div class="flex flex-row items-center">
	  <code>[</code>
  	{#each data.frontmatter.tags as tag}
		<Tag text={tag} />
  	{/each}
  	<code>]</code>
  </div>
  <div class="mx-2 text-[#aaaaaa]">•</div>
  <code>{data.readTime} min read</code>

</div>

<article>
	{@html data.content}
</article>

<style>
	code {
		font-size: 15px;
	}
</style>
