<script>
	import PageBreak from '$lib/components/PageBreak.svelte';
</script>

<svelte:head>
	<title>About - Ritankar Saha</title>
	<meta name="description" content="I'm an aspiring and ambition-driven machine learning engineer." />
</svelte:head> 

<div class="flex flex-col sm:flex-row items-center sm:items-start p-6 bg-white shadow-md rounded-lg">
	<img class="hidden sm:block sm:max-h-[150px] md:max-h-[170px] lg:max-h-[200px] rounded-full aspect-square object-cover shadow-lg" alt="image of Ritankar" src="/images/avatar.webp" />
	<div class="sm:ml-10 mt-6 sm:mt-0">
		<h1 class="text-3xl font-bold text-gray-800 mb-4">About</h1>
		<p class="text-lg text-gray-700 mb-4">
			Hey - I'm Ritankar Saha, an aspiring Web3 and Cloud Engineer. Initially, I ventured into web and app development, particularly backend development, as I saw it as a forward-thinking career path driven by advancements like ChatGPT. This journey sparked a deep passion for web and software engineering in me. Additionally, I have a strong interest in competitive coding and enjoy solving challenges on LeetCode. My diverse skill set in web and app development, combined with my enthusiasm for emerging technologies, drives my aspiration to excel as a Web3 developer and Cloud engineer. I am excited about the future and eager to contribute to the evolving tech landscape.
		</p>
		<p class="text-lg text-gray-700 mb-4 !my-0">My interests include:</p>
		<ul class="list-disc list-inside text-lg text-gray-700 mb-4">
			<li>Web3 Development - Solana/Ethereum</li>
			<li>Cloud Engineering</li>
			<li>System Design and DevOps</li>
			<li>Backend Web Development</li>
			<li>App Development</li>
			<li>Playing the guitar</li>
			<li>Binging Netflix</li>
		</ul>
		<p class="text-lg font-bold text-gray-700 mb-4">For more information on me, you can visit my portfolio website from the header or by clicking on "portfolio". Thanks!</p>
		<p class="text-lg text-gray-700 mb-4">For anyone interested in connecting - don't hesitate to send me an email at <a href="mailto:ritankar.saha786@gmail.com" class="text-blue-600 hover:text-blue-800 transition-colors">ritankar.saha786@gmail.com</a>.</p>
	</div>
</div>

<style>
	p:not(ul p) {
		margin-top: 12px;
		margin-bottom: 12px;
	}
	img {
		box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.1);
	}
</style>
