<script lang="ts">
	import type { PageData } from './$types';
	import Tag from '$lib/components/Tag.svelte';
	import { formatDate } from '$lib/utils';
	import { onMount } from 'svelte';
	import hljs from 'highlight.js/lib/core';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import python from 'highlight.js/lib/languages/python';
	import go from 'highlight.js/lib/languages/go';
	import 'highlight.js/styles/github.css';
	import { fly, fade } from 'svelte/transition';

	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	hljs.registerLanguage('python', python);
	hljs.registerLanguage('go', go);

	export let data;

	let comments = [];
	let name = "";
	let commentText = "";
	let visible = false;

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
				<!-- Article Header -->
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
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							{data.readTime} min read
						</span>
					</div>
				</header>

				<!-- Article Content -->
				<article class="prose prose-lg prose-primary max-w-none mb-16" in:fly={{ y: 20, duration: 600, delay: 200 }}>
					{@html data.content}
				</article>

				<!-- Comment Section -->
				<div class="mt-16 pt-8 border-t border-gray-200" in:fly={{ y: 20, duration: 600, delay: 400 }}>
					<h2 class="text-2xl font-bold text-gray-900 mb-6">Comments</h2>

					<!-- Comment Form -->
					<div class="bg-gray-50 p-6 rounded-xl shadow-sm mb-8">
						<input
							type="text"
							placeholder="Your Name"
							bind:value={name}
							class="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-500"
						/>
						<textarea
							placeholder="Write a comment..."
							bind:value={commentText}
							class="w-full p-3 border rounded-lg mb-4 h-24 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-500"
						></textarea>
						<button 
							on:click={addComment}
							class="btn btn-primary px-5 py-2 rounded-lg"
						>
							Submit Comment
						</button>
					</div>

					<!-- Display Comments -->
					<div class="space-y-4">
						{#each comments as comment}
							<div class="p-4 border rounded-lg shadow-sm bg-white">
								<div class="flex items-center mb-2">
									<div class="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center mr-3">
										{comment.name.charAt(0).toUpperCase()}
									</div>
									<div>
										<p class="font-semibold text-gray-900">{comment.name}</p>
										<p class="text-xs text-gray-500">{formatDate(comment.date)}</p>
									</div>
								</div>
								<p class="text-gray-700 mt-2">{comment.text}</p>
							</div>
						{/each}
						
						{#if comments.length === 0}
							<div class="text-center py-8 text-gray-500">
								Be the first to leave a comment!
							</div>
						{/if}
					</div>
				</div>

				<!-- Back to Writing Link -->
				<div class="mt-12" in:fade={{ duration: 800, delay: 600 }}>
					<a href="/writing" class="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
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