<script lang="ts">
	import type { PageData } from './$types';
	import Tag                from '$lib/components/Tag.svelte';
	import { formatDate }     from '$lib/utils';
	import { onMount }        from 'svelte';
	import hljs from 'highlight.js/lib/core';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import python from 'highlight.js/lib/languages/python';
	import go from 'highlight.js/lib/languages/go';
	import 'highlight.js/styles/github.css';
	import { fly, fade } from 'svelte/transition';
	import Comments from '$lib/components/Comments.svelte';
  
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	hljs.registerLanguage('python', python);
	hljs.registerLanguage('go', go);
  
	export let data: PageData;
	let visible = false;
  
	onMount(() => {
	  document.querySelectorAll('pre code').forEach((block) =>
		hljs.highlightElement(block as HTMLElement)
	  );
	  visible = true;
	});
</script>
  
<svelte:head>
	<title>{data.frontmatter.title} • Ritankar Saha</title>
	<meta name="description" content={data.frontmatter.description} />
</svelte:head>
  
<div class="min-h-screen bg-white">
	{#if visible}
	<div class="container mx-auto px-4 py-16" in:fade={{ duration: 800 }}>
		<div class="max-w-3xl mx-auto">
  
		<!-- Header Section -->
		<header class="mb-12" in:fly={{ y: 20, duration: 600 }}>
			<h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
				<span class="gradient-text">{data.frontmatter.title}</span>
			</h1>
			
			<!-- Post Metadata -->
			<div class="flex flex-wrap items-center text-gray-600 gap-3 mb-4">
				<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-50 text-primary-700 shadow-sm">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
					</svg>
					{formatDate(new Date(data.frontmatter.date))}
				</span>
				
				<span class="text-gray-300">•</span>
				
				<div class="flex items-center gap-2 flex-wrap">
					{#each data.frontmatter.tags as tag}
						<Tag text={tag} />
					{/each}
				</div>
				
				<span class="text-gray-300">•</span>
				
				<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-50 text-gray-700 shadow-sm">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					{data.readTime} min read
				</span>
				
				<span class="text-gray-300">•</span>
				
				<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-50 text-gray-700 shadow-sm">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
					</svg>
					{data.views} views
				</span>
			</div>
			
			<!-- Featured Image Placeholder (Optional) -->
			{#if data.frontmatter.image}
				<div class="rounded-lg overflow-hidden shadow-lg mb-8">
					<img src={data.frontmatter.image} alt={data.frontmatter.title} class="w-full h-auto" />
				</div>
			{/if}
		</header>
  
		<!-- Article Content -->
		<article class="prose prose-lg prose-primary max-w-none mb-16 bg-white rounded-lg shadow-sm p-8"
				in:fly={{ y: 20, duration: 600, delay: 200 }}>
			{@html data.content}
		</article>
  
		<!-- Comments Section -->
		<div class="bg-white rounded-lg shadow-sm p-8 mb-16" in:fly={{ y: 20, duration: 600, delay: 400 }}>
			<Comments postSlug={data.slug} />
		</div>
  
		<!-- Back to Writing Button -->
		<div class="mt-12" in:fade={{ duration: 800, delay: 600 }}>
			<a href="/writing"
				class="group inline-flex items-center px-4 py-2 rounded-full bg-gray-50 text-primary-600 hover:bg-primary-50 hover:text-primary-700 transition-all duration-300 shadow-sm">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd"
						d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
						clip-rule="evenodd" />
				</svg>
				Back to Writing
			</a>
		</div>
  
		</div>
	</div>
	{/if}
</div>
  
<style>
	:global(pre) {
		border-radius: 0.75rem;
		margin: 1.5rem 0;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
		padding: 1.25rem;
	}
  
	:global(code) {
		font-family: 'Roboto Mono', monospace;
		font-size: 0.9rem;
	}
  
	:global(article h1) {
		font-size: 2.25rem;
		margin-bottom: 1.5rem;
		color: #1f2937;
		font-weight: 700;
	}
  
	:global(article h2) {
		font-size: 1.875rem;
		margin-top: 2rem;
		margin-bottom: 1rem;
		color: #111827;
		font-weight: 600;
		border-bottom: 1px solid #e5e7eb;
		padding-bottom: 0.5rem;
	}
  
	:global(article h3) {
		font-size: 1.5rem;
		margin-top: 1.75rem;
		margin-bottom: 0.75rem;
		color: #374151;
		font-weight: 600;
	}
  
	:global(article p) {
		margin-bottom: 1.25rem;
		line-height: 1.75;
		color: #374151;
	}
  
	:global(article a) {
		color: #0284c7;
		text-decoration: underline;
		text-underline-offset: 2px;
		transition: color 0.3s ease;
	}
  
	:global(article a:hover) {
		color: #0369a1;
	}
	
	:global(article ul) {
		margin-bottom: 1.5rem;
		padding-left: 1.5rem;
	}
	
	:global(article ol) {
		margin-bottom: 1.5rem;
		padding-left: 1.5rem;
	}
	
	:global(article li) {
		margin-bottom: 0.5rem;
	}
	
	:global(article blockquote) {
		border-left: 4px solid #0284c7;
		padding-left: 1rem;
		margin-left: 0;
		margin-right: 0;
		font-style: italic;
		color: #4b5563;
	}
	
	:global(.gradient-text) {
		background: linear-gradient(to right, #0284c7, #0ea5e9);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
</style>