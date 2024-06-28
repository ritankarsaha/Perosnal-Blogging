<script lang="ts">
	import PageBreak from '$lib/components/PageBreak.svelte';
	import type { PageData } from './$types';
	import Post from '$lib/components/Post.svelte';
  
	export let data: PageData = { posts: [] };
</script>
  
<svelte:head>
	<title>Personal Website of Ritankar Saha</title>
	<meta name="description" content="The personal blogging website of Ritankar Saha, a web and app developer & aspiring web3 and cloud engineer." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="" />
	<meta property="og:title" content="Personal Blogging Page of Ritankar Saha" />
	<meta property="og:description" content="The personal website and blog of Ritankar Saha, a web and app developer & aspiring web3 and cloud engineer." />
	<meta property="og:image" content="" />
	<meta property="og:image:alt" content="Website logo" />
  
	<!-- Twitter -->
	<meta property="twitter:url" content="" />
	<meta property="twitter:title" content="Personal Blogging Website of Ritankar Saha" />
	<meta property="twitter:description" content="The personal blogging website of Ritankar Saha, a web and app developer & aspiring web3 and cloud engineer." />
	<meta property="twitter:image" content="" />
	<meta property="twitter:image:alt" content="Website logo" />
</svelte:head> 
  
<div class="container mx-auto p-4">
	<header class="text-center my-8">
	  <h1 class="text-4xl font-extrabold mb-6 text-gray-900">Personal Blogging Website of Ritankar Saha</h1>
	  <p class="text-lg mb-6 text-gray-700">
		Hey, I'm aspiring to become a  "cracked" cloud and web3 engineer. I come from a software/web & app engineering background with roughly two years of experience. This website is mainly for me to document my Web, App, Cloud, Web3, Bitcoin, DevOps engineering journey and it works as a means of me becoming a better writer.
	  </p>
	  <p class="text-lg mb-6 text-gray-700">
		The <a href="/writing" class="text-blue-600 hover:text-blue-800 transition-colors">writing</a> section of this website contains my daily logs of the things I learn in the domains I am currently advancing in especially web3 and cloud, often in the form of a resource that can be freely used for learning or making your own.
	  </p>
	  <p class="text-lg mb-6 text-gray-700">
		Don't hesitate to contact me by e-mail at <a href="mailto:ritankar.saha786@gmail.com" class="text-blue-600 hover:text-blue-800 transition-colors">ritankar.saha786@gmail.com</a> or send me a message on X at <a href="https://x.com/ritankarxx" target="_blank" rel="noreferrer" class="text-blue-600 hover:text-blue-800 transition-colors">@ritankarxx</a>. I'd be more than happy to network with like-minded individuals.
	  </p>
	</header>
  
	<main>
	  <section class="my-12">
		<h2 class="text-3xl font-bold mb-6 text-gray-900">Latest Posts</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		  {#each data.posts as post}
			<Post post={post} />
		  {/each}
		</div>
	  </section>
  
	  <PageBreak />
  
	  <section class="my-12">
		<h2 class="text-3xl font-bold mb-6 text-gray-900">Experience & Technical Skills</h2>
		<p class="text-lg mb-4 text-gray-700">I've done freelancing and volunteering work in different areas of software engineering - mostly related to web & app development, but also things like web3 technologies and generating smart contracts.</p>
		<p class="text-lg mb-4 text-gray-700">Here are some notable projects I've been involved in:</p>
		<ul class="list-disc list-inside mb-6 text-gray-700">
		  <li>GSSoC Contributor @ <a target="_blank" rel="noreferrer" href="" class="text-blue-600 hover:text-blue-800 transition-colors">GSSoC Contributor Certificate</a> | 05/2024 - 07/2024</li>
		</ul>
  
		<p class="text-lg mb-4 text-gray-700">Technologies I know my way around include JavaScript, TypeScript, Node.js, Express.js, GoLang, Python, ReactJS, NextJS, Django, Vue.js, Firebase, Supabase, MongoDB, Prisma, GraphQL, AWS-Aplify, DynamoDB, REST APIs, MERN stack</p>
		<p class="text-lg mb-4 text-gray-700">Currently I am working my way through web3 technologies which include Solana, generating smart contracts, cloud computing with AWS Data Lakes and DevOps engineering and making new establishments in the backend engineering field using GoLang.</p>
		<p class="text-lg mb-4 text-gray-700">You can always visit my website at <a href="" class="text-blue-600 hover:text-blue-800 transition-colors">Portfolio Website</a> to know more about me or click on the link in the footer below</p>
	  </section>
	</main>
  
	<footer class="text-center py-8">
	  <p class="text-sm text-gray-600">&copy; 2024 Ritankar Saha. All rights reserved.</p>
	</footer>
</div>
  
<style>
	:global(body) {
	  font-family: 'Inter', sans-serif;
	  color: #333;
	  background-color: #f9f9f9;
	}
  
	.container {
	  max-width: 1200px;
	  padding: 0 1rem;
	}
</style>
