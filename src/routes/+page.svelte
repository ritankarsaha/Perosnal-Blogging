<script lang="ts">
	import PageBreak from '$lib/components/PageBreak.svelte';
	import type { PageData } from './$types';
	import Post from '$lib/components/Post.svelte';

	export let data: PageData = { posts: [] };
</script>

<svelte:head>
	<title>Personal Website of Ritankar Saha</title>
	<meta name="description" content="The personal blogging website of Ritankar Saha, a backend, cloud, and Web3 engineer passionate about event-driven systems and distributed computing." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="" />
	<meta property="og:title" content="Personal Website & Blog of Ritankar Saha" />
	<meta property="og:description" content="The personal website and blog of Ritankar Saha, a backend, cloud, and Web3 engineer passionate about event-driven systems and distributed computing." />
	<meta property="og:image" content="" />
	<meta property="og:image:alt" content="Website logo" />

	<!-- Twitter -->
	<meta property="twitter:url" content="" />
	<meta property="twitter:title" content="Personal Blogging Website of Ritankar Saha" />
	<meta property="twitter:description" content="The personal blogging website of Ritankar Saha, a backend, cloud, and Web3 engineer passionate about event-driven systems and distributed computing." />
	<meta property="twitter:image" content="" />
	<meta property="twitter:image:alt" content="Website logo" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<header class="py-16 sm:py-24">
			<h1 class="text-4xl sm:text-6xl font-bold text-gray-900 text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
				Ritankar Saha
			</h1>
			<div class="max-w-3xl mx-auto space-y-6 text-center">
				<p class="text-lg sm:text-xl text-gray-700 leading-relaxed">
					Hey, I'm an <span class="font-semibold text-blue-600">aspiring backend, cloud, and Web3 engineer</span> with a strong interest in <span class="font-semibold text-blue-600">distributed systems, event-driven architectures, and DevOps</span>.
				</p>
				<p class="text-lg sm:text-xl text-gray-700 leading-relaxed">
					Visit the <a href="/writing" class="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium">
						writing <span class="ml-1">→</span>
					</a> section for my daily logs on backend systems, Web3, cloud computing, and DevOps.
				</p>
				<div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
					<a href="mailto:ritankar.saha786@gmail.com" class="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
						Email Me
					</a>
					<a href="https://x.com/ritankarxx" target="_blank" rel="noreferrer" class="inline-flex items-center px-6 py-3 rounded-full border-2 border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 transition-all">
						@ritankarxx
					</a>
				</div>
			</div>
		</header>

		<main class="py-12">
			<section class="mb-20">
				<h2 class="text-3xl font-bold text-gray-900 mb-8 relative">
					<span class="bg-blue-100 px-2 py-1 rounded">Latest Posts</span>
				</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{#each data.posts as post}
						<Post post={post} />
					{/each}
				</div>
			</section>

			<PageBreak />

			<section class="py-12">
				<h2 class="text-3xl font-bold text-gray-900 mb-8 relative">
					<span class="bg-blue-100 px-2 py-1 rounded">Experience & Skills</span>
				</h2>
				<div class="space-y-8 max-w-4xl">
					<div class="prose prose-lg text-gray-700">
						<p class="leading-relaxed">
							I've worked on <span class="font-semibold text-blue-600">backend development, Web3, cloud computing, and distributed systems</span>. My expertise includes building event-driven microservices, working with Kafka, designing cloud architectures on AWS, and developing backend solutions using Golang.
						</p>
					</div>
					
					<!-- <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
						<h3 class="text-xl font-semibold mb-4 text-gray-900">Notable Projects</h3>
						<ul class="space-y-3">
							<li class="flex items-start">
								<span class="text-blue-600 mr-2">•</span>
								<span>Contributor to <a target="_blank" rel="noreferrer" href="https://github.com/dhiway/cord" class="text-blue-600 hover:text-blue-800 transition-colors font-medium">Dhiway Cord</a> - Rust-based decentralized identity framework.</span>
							</li>
							<li class="flex items-start">
								<span class="text-blue-600 mr-2">•</span>
								<span>Contributor to <a target="_blank" rel="noreferrer" href="https://github.com/nightwatchjs/nightwatch" class="text-blue-600 hover:text-blue-800 transition-colors font-medium">Nightwatch.js</a> - End-to-end testing framework for web applications.</span>
							</li>
							<li class="flex items-start">
								<span class="text-blue-600 mr-2">•</span>
								<span>Contributor to <a target="_blank" rel="noreferrer" href="https://github.com/c2siorg/Webiu" class="text-blue-600 hover:text-blue-800 transition-colors font-medium">Webiu</a> - Open-source web UI toolkit.</span>
							</li>
						</ul>
					</div> -->

					<div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
						<h3 class="text-xl font-semibold mb-4 text-gray-900">Technical Stack</h3>
						<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div>
								<h4 class="font-medium text-blue-600 mb-2">Backend</h4>
								<p class="text-gray-700">Golang, Node.js, TypeScript, Django, REST APIs, GraphQL</p>
							</div>
							<div>
								<h4 class="font-medium text-blue-600 mb-2">Cloud & DevOps</h4>
								<p class="text-gray-700">AWS (EC2, S3, Lambda, DynamoDB), Docker, Kubernetes</p>
							</div>
							<div>
								<h4 class="font-medium text-blue-600 mb-2">Databases</h4>
								<p class="text-gray-700">PostgreSQL, MySQL, MongoDB, Redis</p>
							</div>
							<div>
								<h4 class="font-medium text-blue-600 mb-2">Event-Driven Systems</h4>
								<p class="text-gray-700">Apache Kafka, RabbitMQ</p>
							</div>
							<div>
								<h4 class="font-medium text-blue-600 mb-2">Web3</h4>
								<p class="text-gray-700">Solidity, Smart Contracts, Solana, Ethereum</p>
							</div>
						</div>
					</div>

					<div class="text-center pt-8">
						<a href="/contributions" class="inline-flex items-center px-8 py-4 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors">
							View Open Source Contributions
							<span class="ml-2">→</span>
						</a>
					</div>
				</div>
			</section>
		</main>

		<footer class="py-12 text-center border-t border-gray-200">
			<p class="text-gray-600">&copy; 2024 Ritankar Saha. All rights reserved.</p>
		</footer>
	</div>
</div>

<style>
	:global(body) {
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	a {
		text-decoration: none;
	}
</style>