<script>
  import ContributionCard from '$lib/components/ContributionCard.svelte';
  import { fade, fly, scale } from 'svelte/transition';
  import { spring } from 'svelte/motion';
  import { onMount } from 'svelte';

  const contributions = [
    {
      title: "Dhiway Cord PR #522",
      description: "Added new Test Cases for Distribution Limit Exceeded for the pallet - asset.",
      language: "Rust",
      languageColor: "#DEA584",
      prLink: "https://github.com/dhiway/cord/pull/522"
    },
    {
      title: "Dhiway Cord PR #590",
      description: "Added new Test Cases for Invalid Identifier for the pallet - chain_space.",
      language: "Rust",
      languageColor: "#DEA584",
      prLink: "https://github.com/dhiway/cord/pull/590"
    },
    {
      title: "Dhiway Cord PR #593",
      description: "Added new Test Cases for Node_ID_Too_Long for the pallte - node_authorization.",
      language: "Rust",
      languageColor: "#DEA584",
      prLink: "https://github.com/dhiway/cord/pull/593"
    },
    {
      title: "Dhiway Cord PR #591",
      description: "Added new Test Cases for Invalid Asset Value for the pallet - asset",
      language: "Rust",
      languageColor: "#DEA584",
      prLink: "https://github.com/dhiway/cord/pull/591"
    },
    {
      title: "Dhiway Cord PR #548",
      description: "Added new Test Cases for Invalid Asset Type for the pallet - asset",
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
  let hoveredCard = null;
  
  onMount(() => {
    visible = true;
  });

  const groupedContributions = {
    Rust: contributions.filter(pr => pr.language === "Rust"),
    JavaScript: contributions.filter(pr => pr.language === "JavaScript")
  };

  function handleCardHover(index) {
    hoveredCard = index;
  }

  function handleCardLeave() {
    hoveredCard = null;
  }
</script>

<svelte:head>
  <title>Notable Open Source Contributions - Ritankar Saha</title>
  <meta name="description" content="A list of my most notable open source contributions and pull requests." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-10">
  <div class="max-w-6xl mx-auto">
    {#if visible}
      <!-- Header Section -->
      <div class="mb-16" in:fly="{{ y: 50, duration: 1000 }}">
        <div class="flex flex-col items-center text-center mb-8">
          <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"></div>
          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Notable Open Source Contributions
          </h1>
          <p class="text-gray-600 max-w-2xl text-lg">
            Showcasing my notable contributions to various open source projects, 
            focusing on improving code quality and adding new features and code for the common good.
          </p>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16" 
           in:fly="{{ y: 50, duration: 1000, delay: 200 }}">
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
          <div class="flex flex-col items-center text-center">
            <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
              <span class="text-blue-600 font-bold">{contributions.length}</span>
            </div>
            <p class="text-2xl font-bold text-blue-600 mb-1">{contributions.length}</p>
            <p class="text-sm text-gray-500 uppercase tracking-wider">Total PRs</p>
          </div>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
          <div class="flex flex-col items-center text-center">
            <div class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
              <span class="text-purple-600 font-bold">3</span>
            </div>
            <p class="text-2xl font-bold text-purple-600 mb-1">3</p>
            <p class="text-sm text-gray-500 uppercase tracking-wider">Projects</p>
          </div>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
          <div class="flex flex-col items-center text-center">
            <div class="w-12 h-12 rounded-full flex items-center justify-center mb-3" style="background-color: rgba(222, 165, 132, 0.2);">
              <span style="color: #DEA584; font-weight: bold;">{groupedContributions.Rust.length}</span>
            </div>
            <p class="text-2xl font-bold mb-1" style="color: #DEA584;">
              {groupedContributions.Rust.length}
            </p>
            <p class="text-sm text-gray-500 uppercase tracking-wider">Rust PRs</p>
          </div>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
          <div class="flex flex-col items-center text-center">
            <div class="w-12 h-12 rounded-full flex items-center justify-center mb-3" style="background-color: rgba(241, 224, 90, 0.2);">
              <span style="color: #F1E05A; font-weight: bold;">{groupedContributions.JavaScript.length}</span>
            </div>
            <p class="text-2xl font-bold mb-1" style="color: #F1E05A;">
              {groupedContributions.JavaScript.length}
            </p>
            <p class="text-sm text-gray-500 uppercase tracking-wider">JavaScript PRs</p>
          </div>
        </div>
      </div>

      <!-- Contributions Grid -->
      {#each Object.entries(groupedContributions) as [lang, prs], i}
        <div class="mb-16" in:fly="{{ y: 50, duration: 1000, delay: 300 + i * 100 }}">
          <div class="flex items-center mb-8">
            <div class="w-14 h-14 rounded-full flex items-center justify-center mr-4 bg-white shadow-md p-1">
              <div class="w-10 h-10 rounded-full flex items-center justify-center" 
                   style="background-color: {lang === 'Rust' ? '#DEA584' : '#F1E05A'};">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
            </div>
            <h2 class="text-2xl font-semibold text-gray-800">
              {lang} Contributions
            </h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {#each prs as pr, j}
              <div 
                in:scale="{{ duration: 400, delay: 400 + (i * 100) + (j * 50), start: 0.95 }}"
                on:mouseenter={() => handleCardHover(`${i}-${j}`)}
                on:mouseleave={handleCardLeave}
                class="transform transition-all duration-300 {hoveredCard === `${i}-${j}` ? 'scale-102' : ''}"
              >
                <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
                  <div class="flex justify-between items-start mb-4">
                    <div class="flex items-center">
                      <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                      </div>
                      <h3 class="font-semibold text-lg text-gray-800">{pr.title}</h3>
                    </div>
                    <span class="px-3 py-1 text-xs rounded-full" 
                          style="background-color: {pr.languageColor}20; color: {pr.languageColor};">
                      {pr.language}
                    </span>
                  </div>
                  <p class="text-gray-600 mb-4">{pr.description}</p>
                  <div class="flex justify-end">
                    <a href={pr.prLink} target="_blank" rel="noopener noreferrer" 
                       class="inline-flex items-center px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition-colors">
                      View PR
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
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
    font-family: 'Inter', sans-serif;
  }
  
  :global(*) {
    box-sizing: border-box;
  }

  .scale-102 {
    transform: scale(1.02);
  }
</style>