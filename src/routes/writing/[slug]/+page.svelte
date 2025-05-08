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
  
		  <header class="mb-12" in:fly={{ y: 20, duration: 600 }}>
			<h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
			  {data.frontmatter.title}
			</h1>
			<div class="flex flex-wrap items-center text-gray-600 gap-3">
			  <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-50 text-primary-700">
				{formatDate(new Date(data.frontmatter.date))}
			  </span>
			  <span class="text-gray-300">•</span>
			  <div class="flex items-center gap-2">
				{#each data.frontmatter.tags as tag}
				  <Tag text={tag} />
				{/each}
			  </div>
			  <span class="text-gray-300">•</span>
			  <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-50 text-gray-700">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
				{data.readTime} min read
			  </span>
			  <span class="text-gray-300">•</span>
			  <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-50 text-gray-700">
				👁️ {data.views} views
			  </span>
			</div>
		  </header>
  
		  <article class="prose prose-lg prose-primary max-w-none mb-16"
				   in:fly={{ y: 20, duration: 600, delay: 200 }}>
			{@html data.content}
		  </article>
  
		  <!-- Comments Section -->
		  <Comments postSlug={data.slug} />
  
		  <div class="mt-12" in:fade={{ duration: 800, delay: 600 }}>
			<a href="/writing"
			   class="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors">
			  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
				<path fill-rule="evenodd"
					  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 
						 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
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
	  border-radius: 0.5rem;
	  margin: 1.5rem 0;
	}
  
	:global(code) {
	  font-family: 'Roboto Mono', monospace;
	  font-size: 0.9rem;
	}
  
	:global(article h1) {
	  font-size: 2.25rem;
	  margin-bottom: 1.5rem;
	  color: #1f2937;
	}
  
	:global(article h2) {
	  font-size: 1.875rem;
	  margin-top: 2rem;
	  margin-bottom: 1rem;
	  color: #111827;
	}
  
	:global(article p) {
	  margin-bottom: 1.25rem;
	  line-height: 1.75;
	}
  
	:global(article a) {
	  color: #0284c7;
	  text-decoration: underline;
	  transition: color 0.3s ease;
	}
  
	:global(article a:hover) {
	  color: #0369a1;
	}
  </style>
  