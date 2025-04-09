<script>
    import ProjectCard from '$lib/components/ProjectCard.svelte';
  
    const web3Projects = [
      {
        title: "Decentralised Health-care Application",
        description: "The Decentralized Clinic App is a Web3 platform designed to connect patients and doctors while ensuring privacy, security, and transparency through the power of blockchain technology.",
        techStack: ["TypeScript", "Rust", "Golang", "Python", "Solidity", "Flutter", "GraphQL", "MongoDB"],
        github: "https://github.com/ritankarsaha/Decentralised_Health_Care_Application",
        deploy: "",
        demo: ""
      },
      {
        title: "Decentralised News Application",
        description: "This is the Decentralised News Application that puts anonymity and privacy at the forefront. Users can read and share news articles without revealing their identities, thanks to the power of blockchain technology.",
        techStack: ["TypeScript", "Rust", "Golang", "Python", "Solidity", "Flutter", "GraphQL", "Postgres"],
        github: "https://github.com/ritankarsaha/Decentralised-News-Application",
        deploy: "",
        demo: ""
      }
    ];
  
    const tools = [
      {
        title: "GitHubber",
        description: "This is a GIT CLI Operating Tool for MacOS and other UNIX based operating systems.",
        techStack: ["Golang"],
        github: "https://github.com/ritankarsaha/GitHubber",
        deploy: "https://github.com/ritankarsaha/GitHubber/releases/tag/v1.0.0",
        demo: ""
      },
      {
        title: "Load-Balancer",
        description: "This is an implementation of a Load-Balancer in Golang using the Round-Robin Algorithm.",
        techStack: ["Golang"],
        github: "https://github.com/ritankarsaha/Load-Balancer",
        deploy: "",
        demo: ""
      },
      {
        title: "Email-Verifier",
        description: "This package is used to verify the email address of a user. It checks if the email address is valid and if the domain exists.",
        techStack: ["Golang"],
        github: "https://github.com/ritankarsaha/Email-Verifier",
        deploy: "",
        demo: ""
      },
      {
        title: "Codeforces Data Visualizer",
        description: "This website displays codeforces data analytics of a single user and can also compare data of 2 users.",
        techStack: ["React.js", "Node.js", "Axios API", "Material UI", "Javascript"],
        github: "https://codeforces-visualiser-ritankar.netlify.app/",
        deploy: "",
        demo: ""
      }
    ];
  
    const backendprojects = [
      {
        title: "Full Phase Backend Implementation in Golang",
        description: "This is a full phase backend implementation in Golang using the Clean Architecture and proper structure.",
        techStack: ["Golang", "Postgres", "GraphQL"],
        github: "https://github.com/ritankarsaha/Go-Backend-Fullscale",
        deploy: "",
        demo: ""
      },
      {
        title: "Authentication from scratch using Golang",
        description: "This project implements a JWT authentication system using Go and MongoDB. It features user registration, login, and data retrieval, employing JWTs for secure access management.",
        techStack: ["Golang", "MongoDB", "JWT"],
        github: "https://github.com/ritankarsaha/Golang-JWT-Auth",
        deploy: "",
        demo: ""
      },
      {
        title: "Full-Scale Backend in Express",
        description: "This is a backend boilerplate based on Express and Node following best industry practices.",
        techStack: ["Express.js"],
        github: "https://github.com/ritankarsaha/Backend-BoilerPlate-Express-Node",
        deploy: "",
        demo: ""
      },
      {
        title: "Photo Uploading Website using Amazon AWS (Amplify)",
        description: "This is a backend boilerplate based on Express and Node following best industry practices.",
        techStack: ["Amazon AWS", "Amplify", "S3", "TypeScript", "GraphQL", "DynamoDB"],
        github: "https://github.com/ritankarsaha/Park-Website-AWS-Amplify",
        deploy: "",
        demo: "https://master.d1cdu92luafnrq.amplifyapp.com/"
      }
    ];
  
    const projectSections = [
      { id: 'web3', title: 'Web3 & Blockchain', projects: web3Projects },
      { id: 'tools', title: 'Developer Tools & Utilities', projects: tools },
      { id: 'backendprojects', title: 'Backend & Cloud Projects', projects: backendprojects }
    ];
  </script>
  
  <svelte:head>
    <title>Projects - Ritankar Saha</title>
    <meta name="description" content="A showcase of my open-source, Web3, backend, and cloud projects." />
  </svelte:head>
  
  <main class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <!-- Hero Section -->
    <div class="relative py-20 bg-white shadow-sm overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50"></div>
      <div class="relative max-w-5xl mx-auto px-6 text-center">
        <h1 class="text-5xl font-bold text-gray-900 mb-6">
          My Projects
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          A collection of my work spanning open source contributions, blockchain technology, backend development, and cloud infrastructure.
        </p>
      </div>
    </div>
  
    <!-- Projects Sections -->
    <div class="max-w-6xl mx-auto px-6 py-20 space-y-24">
      {#each projectSections as section}
        {#if section.projects.length > 0}
          <section id={section.id} class="scroll-mt-20">
            <!-- Section Header -->
            <div class="flex items-center gap-4 mb-12">
              <h2 class="text-3xl font-bold text-gray-900">
                {section.title}
              </h2>
              <div class="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent"></div>
            </div>
  
            <!-- Projects Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {#each section.projects as project}
                <ProjectCard {...project} />
              {/each}
            </div>
          </section>
        {/if}
      {/each}
    </div>
  
    <!-- Footer CTA -->
    <div class="max-w-5xl mx-auto px-6 pb-32">
      <div class="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-16 shadow-lg border border-blue-100">
        <h3 class="text-3xl font-bold text-gray-900 mb-4">
          Want to collaborate?
        </h3>
        <p class="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
          I'm always open to discussing new projects and opportunities. Let's create something amazing together.
        </p>
        <a 
          href="https://forms.gle/DURn89kd5ThuZr7k6" 
          class="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-1"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </main>
  