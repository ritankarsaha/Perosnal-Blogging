<!-- src/routes/projects/+page.svelte -->
<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	const openSourceProjects = [
		{
			title: "Dhiway Cord",
			description: "Rust-based decentralized identity framework.",
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
			description: "Open-source web UI toolkit.",
			techStack: ["JavaScript", "UI", "Open Source"],
			github: "https://github.com/c2siorg/Webiu",
			deploy: "https://webiu.netlify.app",
			demo: ""
		}
	];

	const web3Projects = [
		{
			title: "Solana Auth",
			description: "Solana-based authentication for Web3 apps.",
			techStack: ["Solana", "Web3", "Smart Contracts"],
			github: "https://github.com/example/solana-auth",
			deploy: "",
			demo: "https://solana-auth-demo.netlify.app"
		}
	];

	const backendProjects = [
		{
			title: "Scan8",
			description: "A Kubernetes-based rapid URL/File scanning system.",
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
</script>

<svelte:head>
	<title>Projects - Ritankar Saha</title>
	<meta name="description" content="A showcase of my open-source, Web3, backend, and cloud projects." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
	<div class="max-w-6xl mx-auto">
		<h1 class="text-4xl font-extrabold text-gray-800 mb-8 text-center">My Projects</h1>

		<section class="mb-12">
			<h2 class="text-3xl font-semibold text-gray-700 mb-6">Open Source Contributions</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
				{#each openSourceProjects as project}
					<ProjectCard 
						title={project.title} 
						description={project.description} 
						techStack={project.techStack} 
						github={project.github} 
						deploy={project.deploy} 
						demo={project.demo}
					/>
				{/each}
			</div>
		</section>

		<section class="mb-12">
			<h2 class="text-3xl font-semibold text-gray-700 mb-6">Web3 & Blockchain</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
				{#each web3Projects as project}
					<ProjectCard 
						title={project.title} 
						description={project.description} 
						techStack={project.techStack} 
						github={project.github} 
						deploy={project.deploy} 
						demo={project.demo}
					/>
				{/each}
			</div>
		</section>

		<section class="mb-12">
			<h2 class="text-3xl font-semibold text-gray-700 mb-6">Backend Development</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
				{#each backendProjects as project}
					<ProjectCard 
						title={project.title} 
						description={project.description} 
						techStack={project.techStack} 
						github={project.github} 
						deploy={project.deploy} 
						demo={project.demo}
					/>
				{/each}
			</div>
		</section>

		<section class="mb-12">
			<h2 class="text-3xl font-semibold text-gray-700 mb-6">Cloud & DevOps</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
				{#each cloudProjects as project}
					<ProjectCard 
						title={project.title} 
						description={project.description} 
						techStack={project.techStack} 
						github={project.github} 
						deploy={project.deploy} 
						demo={project.demo}
					/>
				{/each}
			</div>
		</section>
	</div>
</div>
