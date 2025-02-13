<script>
    import ProjectCard from '$lib/components/ProjectCard.svelte';

    const openSourceProjects = [
        {
            title: "Dhiway Cord",
            description: "Rust-based decentralized identity framework for decentralized identity management.",
            techStack: ["Rust", "Blockchain", "Decentralized Identity"],
            github: "https://github.com/dhiway/cord",
            deploy: "",
            demo: ""
        },
        {
            title: "Nightwatch.js",
            description: "End-to-end testing framework for web applications.",
            techStack: ["JavaScript", "Testing", "Automation"],
            github: "https://github.com/nightwatchjs/nightwatch",
            deploy: "",
            demo: ""
        },
        {
            title: "Webiu",
            description: "Open-source UI toolkit for building reusable frontend components.",
            techStack: ["JavaScript", "UI", "Open Source"],
            github: "https://github.com/c2siorg/Webiu",
            deploy: "https://webiu.netlify.app",
            demo: ""
        }
    ];

    const web3Projects = [
        {
            title: "Solana Auth",
            description: "Solana-based authentication system for Web3 applications.",
            techStack: ["Solana", "Web3", "Smart Contracts"],
            github: "https://github.com/example/solana-auth",
            deploy: "",
            demo: "https://solana-auth-demo.netlify.app"
        }
    ];

    const backendProjects = [
        {
            title: "Scan8",
            description: "A Kubernetes-based rapid URL/File scanning system for security analysis.",
            techStack: ["Golang", "Kubernetes", "Security"],
            github: "https://github.com/example/Scan8",
            deploy: "",
            demo: ""
        },
        {
            title: "Web3Auth",
            description: "Decentralized authentication system for dApps.",
            techStack: ["Node.js", "OAuth", "Blockchain"],
            github: "https://github.com/example/Web3Auth",
            deploy: "https://web3auth.io",
            demo: ""
        }
    ];

    const cloudProjects = [
        {
            title: "AWS Data Lake Manager",
            description: "A tool to automate AWS data lake creation and management.",
            techStack: ["AWS", "S3", "Lambda"],
            github: "https://github.com/example/aws-datalake",
            deploy: "",
            demo: ""
        }
    ];

    const projectSections = [
        { id: 'open-source', title: 'Open Source Contributions', projects: openSourceProjects },
        { id: 'web3', title: 'Web3 & Blockchain', projects: web3Projects },
        { id: 'backend', title: 'Backend Development', projects: backendProjects },
        { id: 'cloud', title: 'Cloud & DevOps', projects: cloudProjects },
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