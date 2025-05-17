<script lang="ts">
	import '../app.css';
	import PageBreak from '$lib/components/PageBreak.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
  
	let path: string;
	let isScrolled = false;
	let isMobileMenuOpen = false;
  
	$: {
	  path = $page.route.id || "";
	}

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 10;
		};
		
		window.addEventListener('scroll', handleScroll);
		
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}
</script>

<div class="min-h-screen flex flex-col">
	<header class="sticky top-0 z-50 transition-all duration-300 {isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}">
		<div class="container mx-auto px-4 py-3">
			<nav class="flex items-center justify-between">
				<div class="flex items-center">
					<a href="/" class="text-xl font-display font-bold text-gray-900 hover:text-primary-600 transition-colors duration-200">
						<span class="gradient-text">Ritankar Saha</span>
					</a>
				</div>
				
				<!-- Desktop Navigation -->
				<div class="hidden md:flex space-x-8">
					<a href="/" class="{path == '/' ? 'nav-link active' : 'nav-link'}">
						<i class="fas fa-home mr-1"></i>
					</a>
					<a href="/writing" class="{path.startsWith('/writing') ? 'nav-link active' : 'nav-link'}">
						<i class="fas fa-pen mr-1"></i> 
					</a>
					<a href="/about" class="{path.startsWith('/about') ? 'nav-link active' : 'nav-link'}">
						<i class="fas fa-user mr-1"></i> 
					</a>
					<a href="/skills" class="{path.startsWith('/skills') ? 'nav-link active' : 'nav-link'}">
						<i class="fas fa-cogs mr-1"></i> 
					</a>
					<a href="/projects" class="{path.startsWith('/projects') ? 'nav-link active' : 'nav-link'}">
						<i class="fas fa-folder-open mr-1"></i> 
					</a>
					<a href="/contributions" class="{path.startsWith('/contributions') ? 'nav-link active' : 'nav-link'}">
						<i class="fas fa-code-branch mr-1"></i> 
					</a>
				</div>
				
				<!-- Social Links -->
				<div class="hidden md:flex space-x-4">
					<a href="https://github.com/ritankarsaha" target="_blank" rel="noreferrer" class="social-link">
						<i class="fab fa-github text-lg"></i>
					</a>
					<a href="https://www.linkedin.com/in/ritankar-saha-8041b9289/" target="_blank" rel="noreferrer" class="social-link">
						<i class="fab fa-linkedin text-lg"></i>
					</a>
					<a href="https://medium.com/@ritankar.saha786" target="_blank" rel="noreferrer" class="social-link">
						<i class="fab fa-medium text-lg"></i>
					</a>
					<a href="https://x.com/ritankarxx" target="_blank" rel="noreferrer" class="social-link">
						<i class="fab fa-twitter text-lg"></i>
					</a>
					<a href="mailto:ritankar.saha786@gmail.com" class="social-link">
						<i class="fas fa-envelope text-lg"></i>
					</a>
				</div>
				
				<!-- Mobile Menu Button -->
				<button class="md:hidden text-gray-700 focus:outline-none" on:click={toggleMobileMenu}>
					<i class="fas {isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl"></i>
				</button>
			</nav>
			
			<!-- Mobile Navigation -->
			{#if isMobileMenuOpen}
				<div class="md:hidden py-4 animate-in">
					<div class="flex flex-col space-y-3">
						<a href="/" class="{path == '/' ? 'nav-link active' : 'nav-link'}" on:click={() => isMobileMenuOpen = false}>
							<i class="fas fa-home mr-2"></i> Home
						</a>
						<a href="/writing" class="{path.startsWith('/writing') ? 'nav-link active' : 'nav-link'}" on:click={() => isMobileMenuOpen = false}>
							<i class="fas fa-pen mr-2"></i> Writing
						</a>
						<a href="/about" class="{path.startsWith('/about') ? 'nav-link active' : 'nav-link'}" on:click={() => isMobileMenuOpen = false}>
							<i class="fas fa-user mr-2"></i> About
						</a>
						<a href="/skills" class="{path.startsWith('/skills') ? 'nav-link active' : 'nav-link'}" on:click={() => isMobileMenuOpen = false}>
							<i class="fas fa-cogs mr-2"></i> Skills
						</a>
						<a href="/projects" class="{path.startsWith('/projects') ? 'nav-link active' : 'nav-link'}" on:click={() => isMobileMenuOpen = false}>
							<i class="fas fa-folder-open mr-2"></i> Projects
						</a>
						<a href="/contributions" class="{path.startsWith('/contributions') ? 'nav-link active' : 'nav-link'}" on:click={() => isMobileMenuOpen = false}>
							<i class="fas fa-code-branch mr-2"></i> Contributions
						</a>
					</div>
					
					<div class="flex space-x-5 mt-4 pt-4 border-t border-gray-100">
						<a href="https://github.com/ritankarsaha" target="_blank" rel="noreferrer" class="social-link">
							<i class="fab fa-github text-lg"></i>
						</a>
						<a href="https://www.linkedin.com/in/ritankar-saha-8041b9289/" target="_blank" rel="noreferrer" class="social-link">
							<i class="fab fa-linkedin text-lg"></i>
						</a>
						<a href="https://medium.com/@ritankar.saha786" target="_blank" rel="noreferrer" class="social-link">
							<i class="fab fa-medium text-lg"></i>
						</a>
						<a href="https://x.com/ritankarxx" target="_blank" rel="noreferrer" class="social-link">
							<i class="fab fa-twitter text-lg"></i>
						</a>
						<a href="mailto:ritankar.saha786@gmail.com" class="social-link">
							<i class="fas fa-envelope text-lg"></i>
						</a>
						<a href="https://wa.me/9732839187" target="_blank" rel="noreferrer" class="social-link">
							<i class="fab fa-whatsapp text-lg"></i>
						</a>
					</div>
				</div>
			{/if}
		</div>
	</header>

	<main class="flex-grow">
		<slot />
	</main>

	<footer class="bg-gray-50 border-t border-gray-100">
		<div class="container mx-auto px-4 py-8">
			<div class="flex flex-col md:flex-row items-center justify-between">
				<div class="mb-4 md:mb-0">
					<a href="/" class="text-lg font-display font-semibold text-gray-800">Ritankar Saha</a>
					<p class="text-sm text-gray-500 mt-1">Backend, Cloud & Web3 Engineer</p>
				</div>
				
				<div class="flex space-x-6">
					<a href="https://github.com/ritankarsaha" target="_blank" rel="noreferrer" class="social-link">
						<i class="fab fa-github text-lg"></i>
					</a>
					<a href="https://www.linkedin.com/in/ritankar-saha-8041b9289/" target="_blank" rel="noreferrer" class="social-link">
						<i class="fab fa-linkedin text-lg"></i>
					</a>
					<a href="https://medium.com/@ritankar.saha786" target="_blank" rel="noreferrer" class="social-link">
						<i class="fab fa-medium text-lg"></i>
					</a>
					<a href="mailto:ritankar.saha786@gmail.com" class="social-link">
						<i class="fas fa-envelope text-lg"></i>
					</a>
					<a href="https://x.com/ritankarxx" target="_blank" rel="noreferrer" class="social-link">
						<i class="fab fa-twitter text-lg"></i>
					</a>
					<a href="https://www.instagram.com/" target="_blank" rel="noreferrer" class="social-link">
						<i class="fab fa-instagram text-lg"></i>
					</a>
					<a href="https://wa.me/9732839187" target="_blank" rel="noreferrer" class="social-link">
						<i class="fab fa-whatsapp text-lg"></i>
					</a>
				</div>
			</div>
			
			<div class="mt-6 pt-6 border-t border-gray-200 text-center">
				<p class="text-sm text-gray-500">&copy; {new Date().getFullYear()} Ritankar Saha. All rights reserved.</p>
			</div>
		</div>
	</footer>
</div>