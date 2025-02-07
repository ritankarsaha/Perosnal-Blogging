<script lang="ts">
	import '../app.css';
	import PageBreak from '$lib/components/PageBreak.svelte';
	import { page } from '$app/stores';
  
	let path: string;
  
	$: {
	  path = $page.route.id || "";
	}
  </script>
  
  <div class="container mx-auto px-4">
	<header class="w-full py-4">
	  <nav class="flex items-center justify-between">
		<div class="flex items-center">
		  <a href="/" class="text-lg font-bold text-gray-800">Ritankar Saha</a>
		</div>
		<div class="flex space-x-6">
			<a href="/" class={path == "/" ? "nav-link active" : "nav-link"}>
				<i class="fas fa-home fa-lg"></i>
			</a>
			<a href="/writing" class={path.startsWith("/writing") ? "nav-link active" : "nav-link"}>
				<i class="fas fa-pen fa-lg"></i>
			</a>
			<a href="/about" class={path.startsWith("/about") ? "nav-link active" : "nav-link"}>
				<i class="fas fa-user fa-lg"></i>
			</a>
			<a href="/skills" class={path.startsWith("/skills") ? "nav-link active" : "nav-link"}>
				<i class="fas fa-cogs fa-lg"></i>  <!-- Added skills icon -->
			</a>
			

		</div>
		<div class="hidden md:flex space-x-4">
		  <a href="https://github.com/ritankarsaha" target="_blank" rel="noreferrer" class="social-link"><i class="fab fa-github fa-lg"></i></a>
		  <a href="https://x.com/ritankarxx" target="_blank" rel="noreferrer" class="social-link"><i class="fab fa-twitter fa-lg"></i></a>
		  <a href="mailto:ritankar.saha786@gmail.com" class="social-link"><i class="fas fa-envelope fa-lg"></i></a>
		  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" class="social-link"><i class="fab fa-instagram fa-lg"></i></a>
		  <a href="https://www.linkedin.com/in/ritankar-saha-8041b9289/" target="_blank" rel="noreferrer" class="social-link"><i class="fab fa-linkedin fa-lg"></i></a>
		  <a href="https://wa.me/9732839187" target="_blank" rel="noreferrer" class="social-link"><i class="fab fa-whatsapp fa-lg"></i></a>
		</div>
	  </nav>
	</header>
	<PageBreak />
	<main>
	  <slot />
	</main>
	<PageBreak />
	<footer class="flex items-center justify-between py-4">
	  <div class="flex space-x-4">
		<a href="https://github.com/ritankarsaha" target="_blank" rel="noreferrer" class="social-link"><i class="fab fa-github fa-lg"></i></a>
		<a href="https://x.com/ritankarxx" target="_blank" rel="noreferrer" class="social-link"><i class="fab fa-twitter fa-lg"></i></a>
		<a href="mailto:ritankar.saha786@gmail.com" class="social-link"><i class="fas fa-envelope fa-lg"></i></a>
		<a href="https://www.instagram.com/" target="_blank" rel="noreferrer" class="social-link"><i class="fab fa-instagram fa-lg"></i></a>
		<a href="https://www.linkedin.com/in/ritankar-saha-8041b9289/" target="_blank" rel="noreferrer" class="social-link"><i class="fab fa-linkedin fa-lg"></i></a>
		<a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noreferrer" class="social-link"><i class="fab fa-whatsapp fa-lg"></i></a>
	  </div>
	  <div class="text-sm text-gray-500">
		<a href="/" class="footer-link">Ritankar Saha</a>
	  </div>
	</footer>
  </div>
  
  <style>
	.container {
	  max-width: 1200px;
	}
  
	header {
	  border-bottom: 1px solid #e5e7eb;
	}
  
	.nav-link {
	  font-size: 1.5rem; /* Increased icon size */
	  color: #666666;
	  padding: 0.5rem;
	  transition: color 0.3s;
	}
  
	.nav-link.active {
	  color: #444444;
	}
  
	.social-link {
	  font-size: 1.5rem; /* Increased icon size */
	  color: #0471d7;
	  transition: color 0.3s;
	}
  
	.social-link:hover {
	  color: #025cb2;
	  cursor: pointer;
	}
  
	footer {
	  border-top: 1px solid #e5e7eb;
	}
  
	.footer-link {
	  color: #888888;
	  font-weight: 500;
	  text-decoration: none;
	}
  
	.footer-link:hover {
	  text-decoration: underline;
	}
  </style>
  