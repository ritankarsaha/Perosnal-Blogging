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

	let comments = [];
	let name = "";
	let commentText = "";

	const addComment = () => {
		if (name.trim() && commentText.trim()) {
			comments = [...comments, { name, text: commentText, date: new Date() }];
			name = "";
			commentText = "";
		}
	};

	onMount(() => {
		document.querySelectorAll('pre code').forEach((block) => {
			hljs.highlightElement(block as HTMLElement);
		});
	});
</script>

<svelte:head>
	<title>{data.frontmatter.title} • Ritankar Saha</title>
	<meta name="description" content={data.frontmatter.description} />
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

		<!-- Comment Section -->
		<div class="mt-16 pt-8 border-t border-gray-200">
			<h2 class="text-2xl font-bold text-gray-900 mb-4">Comments</h2>

			<!-- Comment Form -->
			<div class="bg-gray-100 p-6 rounded-lg shadow-md">
				<input
					type="text"
					placeholder="Your Name"
					bind:value={name}
					class="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
				/>
				<textarea
					placeholder="Write a comment..."
					bind:value={commentText}
					class="w-full p-3 border rounded-md mb-4 h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
				></textarea>
				<button 
					on:click={addComment}
					class="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
				>
					Submit Comment
				</button>
			</div>

			<!-- Display Comments -->
			<div class="mt-6 space-y-4">
				{#each comments as comment}
					<div class="p-4 border rounded-lg shadow-sm bg-gray-50">
						<p class="font-semibold text-gray-900">{comment.name}</p>
						<p class="text-gray-700 mt-1">{comment.text}</p>
						<p class="text-xs text-gray-500 mt-2">{formatDate(comment.date)}</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Back to Writing Link -->
		<div class="mt-12">
			<a href="/writing" class="text-blue-600 hover:text-blue-800 transition-colors flex items-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
				</svg>
				Back to Writing
			</a>
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
