<script lang="ts">
	import Tag from '$lib/components/Tag.svelte';
	import { formatDate } from '$lib/utils';
	import { onMount } from 'svelte';
	import hljs from 'highlight.js/lib/core';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import python from 'highlight.js/lib/languages/python';
	import go from 'highlight.js/lib/languages/go';
	import 'highlight.js/styles/github.css';

	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	hljs.registerLanguage('python', python);
	hljs.registerLanguage('go', go);

	export let data;

	onMount(() => {
		document.querySelectorAll('pre code').forEach((block) => {
			hljs.highlightElement(block as HTMLElement);
		});
	});
</script>

<svelte:head>
	<title>{data.frontmatter.title} • Ritankar Saha</title>
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
	<meta property="twitter:image" content="" />
	<meta property="twitter:image:alt" content="Website logo" />
</svelte:head>

<div class="bg-white min-h-screen py-16">
	<div class="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<header class="mb-12">
			<h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
				{data.frontmatter.title}
			</h1>
			
			<div class="flex flex-wrap items-center text-gray-600 space-x-3">
				<span class="text-sm font-medium bg-blue-50 px-2 py-1 rounded">
					{formatDate(new Date(data.frontmatter.date))}
				</span>
				
				<span class="text-gray-300">•</span>
				
				<div class="flex items-center space-x-2">
					{#each data.frontmatter.tags as tag}
						<Tag text={tag} />
					{/each}
				</div>
				
				<span class="text-gray-300">•</span>
				
				<span class="text-sm font-medium bg-gray-50 px-2 py-1 rounded">
					{data.readTime} min read
				</span>
			</div>
		</header>

		<article class="prose prose-lg prose-blue max-w-none">
			{@html data.content}
		</article>

		<div class="mt-16 pt-8 border-t border-gray-200">
			<div class="flex justify-between items-center">
				<a href="/writing" class="text-blue-600 hover:text-blue-800 transition-colors flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
					</svg>
					Back to Writing
				</a>
				
				<div class="flex items-center space-x-4">
					<a href="#" class="text-gray-500 hover:text-blue-600 transition-colors">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
						</svg>
					</a>
					<a href="#" class="text-gray-500 hover:text-blue-600 transition-colors">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
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
		color: #2563eb;
		text-decoration: underline;
		transition: color 0.3s ease;
	}

	:global(article a:hover) {
		color: #1d4ed8;
	}
</style>