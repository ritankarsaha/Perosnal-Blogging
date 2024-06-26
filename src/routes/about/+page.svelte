<script>
	import PageBreak from '$lib/components/PageBreak.svelte';
</script>

<svelte:head>
	<title>About - Ritankar Saha</title>
	<meta name="description" content="I'm an aspiring and ambition-driven machine learning engineer." />
</svelte:head> 

<div class="flex flex-row">
	<img class="hidden sm:block sm:max-h-[150px] md:max-h-[170px] lg:max-h-[200px] rounded-full aspect-square object-cover" alt="image of Juho" src="/images/avatar.webp" />
	<div class="sm:ml-10">
		<h1 class="">About</h1>
		<p>Hey - I'm Ritankar Saha, an aspiring Web3 and Cloud Engineer. Initially, I ventured into web and app development, particularly backend development, as I saw it as a forward-thinking career path driven by advancements like ChatGPT. This journey sparked a deep passion for web and software engineering in me. Additionally, I have a strong interest in competitive coding and enjoy solving challenges on LeetCode. My diverse skill set in web and app development, combined with my enthusiasm for emerging technologies, drives my aspiration to excel as a Web3 developer and Cloud engineer. I am excited about the future and eager to contribute to the evolving tech landscape.</p>
		<p class="!my-0" >My interests include:</p>
		<ul>
			<li>Web3 Development - Solana/Ethereum</li>
			<li>Cloud Engineering</li>
			<li>System Design and DevOps</li>
			<li>Backend Web Development</li>
			<li>App Development</li>
			<li>Playing the guitar</li>
			<li>Binging Netflix</li>
		</ul>
       
	<p style="font-weight: bold;"> For more information on me you can visit my portfolio website from the header or by clicking on "portflio". Thanks!! </p>
		<p>For anyone interested in connecting - don't hesitate to send me an email at <a href="mailto:ritankar.saha786@gmail.com">ritankar.saha786@gmail.com</a>.</p>
	</div>
</div>

<style>
	p:not(ul p) {
		margin-top: 12px;
		margin-bottom: 12px;
	}
	img {
		box-shadow: 2px 4px 20px #eeeeee;
	}
</style>
