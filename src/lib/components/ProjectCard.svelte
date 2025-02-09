
<script>
	export let title;
	export let description;
	export let github;
	export let deploy;
	export let demo;
	export let techStack;
</script>

<div class="flex flex-col bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all border border-gray-200">
	<h2 class="text-xl font-semibold text-gray-900">{title}</h2>
	<p class="text-sm text-gray-700 mt-2">{description}</p>

	<!-- Tech Stack -->
	<div class="flex flex-wrap mt-3">
		{#each techStack as tech}
			<span class="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full mr-2 mb-2">{tech}</span>
		{/each}
	</div>

	<!-- Buttons Section -->
	<div class="flex mt-4 space-x-2">
		{#if github}
			<a href={github} target="_blank" class="bg-gray-800 text-white px-4 py-2 rounded-md flex items-center hover:bg-gray-900 transition">
				<i class="fab fa-github mr-2"></i> GitHub
			</a>
		{/if}
		{#if deploy}
			<a href={deploy} target="_blank" class="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-700 transition">
				<i class="fas fa-external-link-alt mr-2"></i> Live
			</a>
		{/if}
		{#if demo}
			<a href={demo} target="_blank" class="bg-green-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-green-700 transition">
				<i class="fas fa-play mr-2"></i> Demo
			</a>
		{/if}
	</div>
</div>
