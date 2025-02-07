<script>
    import SkillCard from '$lib/components/SkillCard.svelte';
    import { fade, fly } from 'svelte/transition';
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
    
    onMount(() => {
      visible = true;
    });
  </script>
  
  <svelte:head>
    <title>Technical Skills - Ritankar Saha</title>
    <meta name="description" content="A showcase of my technical skills including Golang, Kafka, Web3, Cloud Engineering, and more." />
  </svelte:head>
  
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-10">
    <div class="max-w-6xl mx-auto">
      {#if visible}
        <div in:fly="{{ y: 50, duration: 1000 }}" class="mb-12">
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Technical Skills</h1>
          <p class="text-gray-600">A comprehensive overview of my technical expertise and tools I work with.</p>
        </div>
  
        <!-- Programming Stack Section -->
        <div class="mb-12" in:fly="{{ y: 50, duration: 1000, delay: 200 }}">
          <div class="flex items-center mb-6">
            <div class="w-1 h-8 bg-blue-600 rounded-full mr-3"></div>
            <h2 class="text-xl font-semibold text-gray-800">Programming Stack</h2>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {#each stackList as skill, i}
              <div in:fly="{{ y: 20, duration: 400, delay: 300 + i * 50 }}">
                <SkillCard title={skill.name} image={skill.img} />
              </div>
            {/each}
          </div>
        </div>
  
        <!-- Tools & Technologies Section -->
        <div in:fly="{{ y: 50, duration: 1000, delay: 400 }}">
          <div class="flex items-center mb-6">
            <div class="w-1 h-8 bg-purple-600 rounded-full mr-3"></div>
            <h2 class="text-xl font-semibold text-gray-800">Tools & Technologies</h2>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {#each toolList as tool, i}
              <div in:fly="{{ y: 20, duration: 400, delay: 500 + i * 50 }}">
                <SkillCard title={tool.name} image={tool.img} />
              </div>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </div>
  
  <style>
    :global(body) {
      margin: 0;
      padding: 0;
    }
  </style>