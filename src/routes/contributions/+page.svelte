<script>
    import ContributionCard from '$lib/components/ContributionCard.svelte';
    import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';
  
	const contributions = [
		{
			title: "Dhiway Cord PR #561",
			description: "Improved authentication logic for Dhiway Cord project.",
			language: "Rust",
			languageColor: "#DEA584",
			prLink: "https://github.com/dhiway/cord/pull/561"
		},
		{
			title: "Dhiway Cord PR #522",
			description: "Added new test-case for DistributionLimitExceeded.",
			language: "Rust",
			languageColor: "#DEA584",
			prLink: "https://github.com/dhiway/cord/pull/522"
		},
		{
			title: "Dhiway Cord PR #548",
			description: "Added tests for Invalid Asset Type.",
			language: "Rust",
			languageColor: "#DEA584",
			prLink: "https://github.com/dhiway/cord/pull/548"
		},
		{
			title: "Nightwatch.js PR #4271",
			description: "Modified files to ensure proper error display during runtime.",
			language: "JavaScript",
			languageColor: "#F1E05A", 
			prLink: "https://github.com/nightwatchjs/nightwatch/pull/4271"
		},
		{
			title: "Webiu PR #93",
			description: "Enhanced Contributors section for efficiency and readability.",
			language: "JavaScript",
			languageColor: "#F1E05A",
			prLink: "https://github.com/c2siorg/Webiu/pull/93"
		},
		{
			title: "Webiu PR #89",
			description: "Fixed asynchronous errors in the codebase.",
			language: "JavaScript",
			languageColor: "#F1E05A",
			prLink: "https://github.com/c2siorg/Webiu/pull/89"
		}
	];
  
    let visible = false;
    
    onMount(() => {
      visible = true;
    });
  
    const groupedContributions = {
      Rust: contributions.filter(pr => pr.language === "Rust"),
      JavaScript: contributions.filter(pr => pr.language === "JavaScript")
    };
  </script>
  
  <svelte:head>
    <title>Notable Open Source Contributions - Ritankar Saha</title>
    <meta name="description" content="A list of my most notable open source contributions and pull requests." />
  </svelte:head>
  
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-10">
    <div class="max-w-6xl mx-auto">
      {#if visible}
        <!-- Header Section -->
        <div class="mb-12" in:fly="{{ y: 50, duration: 1000 }}">
          <h1 class="text-3xl font-bold text-gray-900 mb-3">Notable Open Source Contributions</h1>
          <p class="text-gray-600 max-w-2xl">
            Showcasing my notable contributions to various open source projects, 
            focusing on improving code quality and adding new features especially under GSoC and C4GT and LFX
          </p>
        </div>
  
        <!-- Stats Section -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12" 
             in:fly="{{ y: 50, duration: 1000, delay: 200 }}">
          <div class="bg-white p-6 rounded-xl shadow-md">
            <p class="text-3xl font-bold text-blue-600">{contributions.length}</p>
            <p class="text-sm text-gray-600">Total PRs</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md">
            <p class="text-3xl font-bold text-purple-600">3</p>
            <p class="text-sm text-gray-600">Projects</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md">
            <p class="text-3xl font-bold" style="color: {groupedContributions.Rust[0].languageColor}">
              {groupedContributions.Rust.length}
            </p>
            <p class="text-sm text-gray-600">Rust PRs</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md">
            <p class="text-3xl font-bold" style="color: {groupedContributions.JavaScript[0].languageColor}">
              {groupedContributions.JavaScript.length}
            </p>
            <p class="text-sm text-gray-600">JavaScript PRs</p>
          </div>
        </div>
  
        <!-- Contributions Grid -->
        {#each Object.entries(groupedContributions) as [lang, prs], i}
          <div class="mb-12" in:fly="{{ y: 50, duration: 1000, delay: 300 + i * 100 }}">
            <div class="flex items-center mb-6">
              <div class="w-1 h-8 rounded-full mr-3" 
                   style="background-color: {prs[0].languageColor};">
              </div>
              <h2 class="text-xl font-semibold text-gray-800">{lang} Contributions</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              {#each prs as pr, j}
                <div in:fly="{{ y: 20, duration: 400, delay: 400 + (i * 100) + (j * 50) }}">
                  <ContributionCard {...pr} />
                </div>
              {/each}
            </div>
          </div>
        {/each}
      {/if}
    </div>
  </div>
  
  <style>
    :global(body) {
      margin: 0;
      padding: 0;
    }
  </style>