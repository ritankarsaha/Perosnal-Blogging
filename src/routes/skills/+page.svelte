<script>
  import SkillCard from '$lib/components/SkillCard.svelte';
  import { fade, fly, scale } from 'svelte/transition';
  import { spring } from 'svelte/motion';
  import { onMount } from 'svelte';

  const stackList = [
    { img: "/skill/java.png", name: "Java" },
    { img: "/skill/c.png", name: "C/C++" },
    { img: "/skill/javascript.svg", name: "JavaScript" },
    { img: "/skill/typescript.png", name: "TypeScript" },
    { img: "/skill/nodejs.png", name: "Node Js" },
    { img: "/skill/react.svg", name: "ReactJS" },
    { img: "/skill/redux.png", name: "Redux" },
    { img: "/skill/vite.jpeg", name: "Vite" },
    { img: "/skill/nextjs.svg", name: "Next Js" },
    { img: "/skill/svelte.png", name: "Svelte" },
    { img: "/skill/kotlin.jpeg", name: "Kotlin" },
    { img: "/skill/mysql.png", name: "MySQL" },
    { img: "/skill/mongo.png", name: "MongoDB" },
    { img: "/skill/postgre.png", name: "Postgre SQL" },
    { img: "/skill/django.png", name: "Django" },
    { img: "/skill/bitcoin.svg", name: "Bitcoin" },
    { img: "/skill/go.png", name: "GoLang" },
    { img: "/skill/python.png", name: "Python" },
    { img: "/skill/rust.png", name: "Rust" },
    { img: "/skill/solidity.png", name: "Solidity" },
    { img: "/skill/ethereum.png", name: "Ethereum" },
    { img: "/skill/kafka.png", name: "Kafka" },
    { img: "/skill/redis.png", name: "Redis" },
    { img: "/skill/expressjs.png", name: "Express Js" },
    { img: "/skill/graphql.png", name: "GraphQL" },
    { img: "/skill/fastapi.png", name: "FastAPI" },
    { img: "/skill/firebase.png", name: "Firebase" },
    { img: "/skill/nextauth.png", name: "NextAuth" },
  ];

  const toolList = [
    { img: "/skill/ubuntu.png", name: "Ubuntu" },
    { img: "/skill/linux.svg", name: "Linux" },
    { img: "/skill/microsoft.svg", name: "Microsoft" },
    { img: "/skill/apple.svg", name: "Mac-OS" },
    { img: "/skill/vs.png", name: "VS Code" },
    { img: "/skill/zed.jpeg", name: "Zed" },
    { img: "/skill/replit.png", name: "Replit" },
    { img: "/skill/figma.png", name: "Figma" },
    { img: "/skill/blender.png", name: "Blender" },
    { img: "/skill/docker.png", name: "Docker" },
    { img: "/skill/postman.png", name: "Postman" },
    { img: "/skill/aws.png", name: "AWS" },
  ];

  let visible = false;
  let activeCategory = "all";
  let hoveredSkill = null;
  
  onMount(() => {
    visible = true;
  });

  function handleSkillHover(skillName) {
    hoveredSkill = skillName;
  }

  function handleSkillLeave() {
    hoveredSkill = null;
  }

  // For filtering in the future if needed
  let filteredStack = stackList;
  let filteredTools = toolList;
</script>

<svelte:head>
  <title>Technical Skills - Ritankar Saha</title>
  <meta name="description" content="A showcase of my technical skills including Golang, Kafka, Web3, Cloud Engineering, and more." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" >
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
            Technical Skills
          </h1>
          <p class="text-gray-600 max-w-2xl text-lg">
            A comprehensive overview of my technical expertise and tools I work with.
          </p>
        </div>
      </div>

      <!-- Programming Stack Section -->
      <div class="mb-16" in:fly="{{ y: 50, duration: 1000, delay: 200 }}">
        <div class="flex items-center mb-8">
          <div class="w-14 h-14 rounded-full flex items-center justify-center mr-4 bg-white shadow-md p-1">
            <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 10h-4V4h-4v6H6l6 6 6-6z"></path>
                <path d="M18 20H6"></path>
              </svg>
            </div>
          </div>
          <h2 class="text-2xl font-semibold text-gray-800">Programming Stack</h2>
        </div>
        
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {#each filteredStack as skill, i}
            <div 
              in:scale="{{ duration: 400, delay: 300 + i * 30, start: 0.95 }}"
              on:mouseenter={() => handleSkillHover(skill.name)}
              on:mouseleave={handleSkillLeave}
              class="transform transition-all duration-300 {hoveredSkill === skill.name ? 'scale-105' : ''}"
            >
              <div class="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col items-center justify-center text-center">
                <div class="w-16 h-16 mb-3 rounded-lg overflow-hidden bg-gray-50 p-2 flex items-center justify-center">
                  <img src={skill.img || "/placeholder.svg"} alt={skill.name} class="max-w-full max-h-full object-contain" />
                </div>
                <h3 class="font-medium text-gray-800">{skill.name}</h3>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Tools & Technologies Section -->
      <div class="mb-16" in:fly="{{ y: 50, duration: 1000, delay: 400 }}">
        <div class="flex items-center mb-8">
          <div class="w-14 h-14 rounded-full flex items-center justify-center mr-4 bg-white shadow-md p-1">
            <div class="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </div>
          </div>
          <h2 class="text-2xl font-semibold text-gray-800">Tools & Technologies</h2>
        </div>
        
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {#each filteredTools as tool, i}
            <div 
              in:scale="{{ duration: 400, delay: 500 + i * 30, start: 0.95 }}"
              on:mouseenter={() => handleSkillHover(tool.name)}
              on:mouseleave={handleSkillLeave}
              class="transform transition-all duration-300 {hoveredSkill === tool.name ? 'scale-105' : ''}"
            >
              <div class="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col items-center justify-center text-center">
                <div class="w-16 h-16 mb-3 rounded-lg overflow-hidden bg-gray-50 p-2 flex items-center justify-center">
                  <img src={tool.img || "/placeholder.svg"} alt={tool.name} class="max-w-full max-h-full object-contain" />
                </div>
                <h3 class="font-medium text-gray-800">{tool.name}</h3>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Skill Level Indicators -->
      <!-- <div in:fly="{{ y: 50, duration: 1000, delay: 600 }}" class="bg-white rounded-xl p-6 shadow-md border border-gray-100">
        <h3 class="text-xl font-semibold text-gray-800 mb-6">Proficiency Levels</h3>
        
        <div class="space-y-6">
          <div>
            <div class="flex justify-between mb-2">
              <span class="text-gray-700 font-medium">Frontend Development</span>
              <span class="text-blue-500 font-medium">90%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div class="bg-blue-500 h-2.5 rounded-full" style="width: 90%"></div>
            </div>
          </div>
          
          <div>
            <div class="flex justify-between mb-2">
              <span class="text-gray-700 font-medium">Backend Development</span>
              <span class="text-purple-500 font-medium">85%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div class="bg-purple-500 h-2.5 rounded-full" style="width: 85%"></div>
            </div>
          </div>
          
          <div>
            <div class="flex justify-between mb-2">
              <span class="text-gray-700 font-medium">Database Management</span>
              <span class="text-green-500 font-medium">80%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div class="bg-green-500 h-2.5 rounded-full" style="width: 80%"></div>
            </div>
          </div>
          
          <div>
            <div class="flex justify-between mb-2">
              <span class="text-gray-700 font-medium">DevOps & Cloud</span>
              <span class="text-amber-500 font-medium">75%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div class="bg-amber-500 h-2.5 rounded-full" style="width: 75%"></div>
            </div>
          </div>
        </div>
      </div> -->
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
</style>