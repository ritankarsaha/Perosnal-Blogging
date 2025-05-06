<script lang="ts">
	import PageBreak from '$lib/components/PageBreak.svelte';
	import type { PageData } from './$types';
	import Post from '$lib/components/Post.svelte';
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	export let data: PageData = { posts: [] };
	
	let visible = false;
	
	onMount(() => {
		visible = true;
	});
</script>

<svelte:head>
	<title>Ritankar Saha | Backend, Cloud & Web3 Engineer</title>
	<meta name="description" content="The personal website of Ritankar Saha, a backend, cloud, and Web3 engineer passionate about event-driven systems and distributed computing." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="" />
	<meta property="og:title" content="Ritankar Saha | Backend, Cloud & Web3 Engineer" />
	<meta property="og:description" content="The personal website of Ritankar Saha, a backend, cloud, and Web3 engineer passionate about event-driven systems and distributed computing." />
	<meta property="og:image" content="" />
	<meta property="og:image:alt" content="Website logo" />

	<!-- Twitter -->
	<meta property="twitter:url" content="" />
	<meta property="twitter:title" content="Ritankar Saha | Backend, Cloud & Web3 Engineer" />
	<meta property="twitter:description" content="The personal website of Ritankar Saha, a backend, cloud, and Web3 engineer passionate about event-driven systems and distributed computing." />
	<meta property="twitter:image" content="" />
	<meta property="twitter:image:alt" content="Website logo" />
</svelte:head>

<div class="min-h-screen">
	<!-- Hero Section -->
	<section class="relative py-20 md:py-32 overflow-hidden">
		<div class="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-70"></div>
		<div class="absolute inset-0 opacity-20">
			<div class="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]"></div>
		</div>
		
		<div class="container mx-auto px-6 relative z-10">
			{#if visible}
				<div class="max-w-4xl mx-auto text-center" in:fly={{ y: 50, duration: 1000 }}>
					<h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
						<span class="gradient-text">Ritankar Saha</span>
					</h1>
					
					<p class="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
						Hey, I'm an <span class="font-semibold text-primary-700">aspiring backend, cloud, and Web3 engineer</span> with a strong interest in <span class="font-semibold text-primary-700">distributed systems, event-driven architectures, and DevOps</span>.
					</p>
					
					<div class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
						<a href="/writing" class="btn btn-primary px-8 py-3 rounded-full text-base">
							Read My Blog
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
							</svg>
						</a>
						
						<a href="mailto:ritankar.saha786@gmail.com" class="btn btn-outline px-8 py-3 rounded-full text-base">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
								<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
								<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
							</svg>
							Contact Me
						</a>
					</div>
					
					<div class="flex justify-center mt-12">
						<div class="flex space-x-4">
							<a href="https://github.com/ritankarsaha" target="_blank" rel="noreferrer" class="btn btn-outline p-3 rounded-full">
								<i class="fab fa-github text-lg"></i>
							</a>
							<a href="https://x.com/ritankarxx" target="_blank" rel="noreferrer" class="btn btn-outline p-3 rounded-full">
								<i class="fab fa-twitter text-lg"></i>
							</a>
							<a href="https://www.linkedin.com/in/ritankar-saha-8041b9289/" target="_blank" rel="noreferrer" class="btn btn-outline p-3 rounded-full">
								<i class="fab fa-linkedin text-lg"></i>
							</a>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</section>

	<!-- Latest Posts Section -->
	<section class="py-20 bg-white">
		<div class="container mx-auto px-6">
			{#if visible}
				<div class="mb-12 text-center" in:fly={{ y: 30, duration: 800, delay: 200 }}>
					<h2 class="text-3xl font-bold mb-4">Latest Posts</h2>
					<p class="text-gray-600 max-w-2xl mx-auto">Explore my latest thoughts and insights on backend systems, Web3, cloud computing, and DevOps.</p>
				</div>
				
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{#each data.posts as post, i}
						<div in:fly={{ y: 20, duration: 600, delay: 300 + i * 100 }}>
							<Post {post} />
						</div>
					{/each}
				</div>
				
				<div class="text-center mt-12" in:fade={{ duration: 800, delay: 600 }}>
					<a href="/writing" class="btn btn-outline px-6 py-3 rounded-lg">
						View All Posts
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
						</svg>
					</a>
				</div>
			{/if}
		</div>
	</section>

	<!-- Skills & Experience Section -->
	<section class="py-20 bg-gray-50">
		<div class="container mx-auto px-6">
			{#if visible}
				<div class="mb-12 text-center" in:fly={{ y: 30, duration: 800, delay: 400 }}>
					<h2 class="text-3xl font-bold mb-4">Experience & Skills</h2>
					<p class="text-gray-600 max-w-2xl mx-auto">My expertise in backend development, Web3, cloud computing, and distributed systems.</p>
				</div>
				
				<div class="max-w-4xl mx-auto" in:fly={{ y: 30, duration: 800, delay: 600 }}>
					<div class="prose prose-lg text-gray-700 mb-12">
						<p class="leading-relaxed">
							I've worked on <span class="font-semibold text-primary-700">backend development, Web3, cloud computing, and distributed systems</span>. My expertise includes building event-driven microservices, working with Kafka, designing cloud architectures on AWS, and developing backend solutions using Golang.
						</p>
					</div>
					
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
						<div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 hover:border-primary-100">
							<h3 class="text-xl font-semibold mb-4 text-gray-900">Technical Stack</h3>
							<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div>
									<h4 class="font-medium text-primary-700 mb-2">Backend</h4>
									<p class="text-gray-700">Golang, Node.js, TypeScript, Django, REST APIs, GraphQL</p>
								</div>
								<div>
									<h4 class="font-medium text-primary-700 mb-2">Cloud & DevOps</h4>
									<p class="text-gray-700">AWS (EC2, S3, Lambda, DynamoDB), Docker, Kubernetes</p>
								</div>
								<div>
									<h4 class="font-medium text-primary-700 mb-2">Databases</h4>
									<p class="text-gray-700">PostgreSQL, MySQL, MongoDB, Redis</p>
								</div>
								<div>
									<h4 class="font-medium text-primary-700 mb-2">Event-Driven Systems</h4>
									<p class="text-gray-700">Apache Kafka, RabbitMQ</p>
								</div>
							</div>
						</div>
						
						<div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 hover:border-primary-100">
							<h3 class="text-xl font-semibold mb-4 text-gray-900">Web3 & Blockchain</h3>
							<p class="text-gray-700 mb-4">
								I'm exploring the world of Web3 development and blockchain technologies, building decentralized applications and smart contracts on Ethereum and Solana.
							</p>
							<div>
								<h4 class="font-medium text-primary-700 mb-2">Technologies</h4>
								<p class="text-gray-700">Solidity, Smart Contracts, Ethereum, Solana, Web3.js, Ethers.js</p>
							</div>
						</div>
					</div>
					
					<div class="flex justify-center" in:fade={{ duration: 800, delay: 800 }}>
						<div class="flex flex-col sm:flex-row gap-4">
							<a href="/skills" class="btn btn-outline px-6 py-3 rounded-lg">
								View All Skills
							</a>
							<a href="/projects" class="btn btn-outline px-6 py-3 rounded-lg">
								Browse Projects
							</a>
							<a href="/contributions" class="btn btn-outline px-6 py-3 rounded-lg">
								Open Source Contributions
							</a>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</section>

	<!-- Contact Section -->
	<section class="py-20 bg-white">
		<div class="container mx-auto px-6">
			{#if visible}
				<div class="max-w-4xl mx-auto text-center" in:fly={{ y: 30, duration: 800, delay: 800 }}>
					<h2 class="text-3xl font-bold mb-6">Let's Connect</h2>
					<p class="text-xl text-gray-700 mb-8">
						I'm always open to discussing new projects, opportunities, or just chatting about technology.
					</p>
					
					<a href="mailto:ritankar.saha786@gmail.com" class="btn btn-primary px-8 py-3 rounded-full text-base inline-flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
						</svg>
						ritankar.saha786@gmail.com
					</a>
				</div>
			{/if}
		</div>
	</section>
</div>