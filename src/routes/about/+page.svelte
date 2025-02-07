<script>
	import { onMount } from 'svelte';
  </script>
  
  <svelte:head>
	<title>About - Ritankar Saha</title>
	<meta name="description" content="I'm an aspiring Web3 and Cloud Engineer with expertise in event-driven programming, Golang, and Kafka." />
  </svelte:head>
  
  <div class="min-h-screen bg-gray-100 flex justify-start items-start p-10">
	<div class="w-full max-w-4xl bg-white shadow-md rounded-lg p-8 flex flex-row items-start space-x-8">
	  <!-- Profile Image -->
	  <img 
		class="w-40 h-40 rounded-lg border border-gray-200 aspect-square object-cover shadow-lg"
		alt="Ritankar's profile image"
		src="/images/avatar.webp"
	  />
	  
	  <!-- Text Content -->
	  <div class="flex-1 space-y-6">
		<h1 class="text-2xl font-bold text-gray-900">About Me</h1>
		
		<div class="space-y-4">
		  <p class="text-gray-700 leading-relaxed">
			Hey 👋 I'm <span class="font-semibold text-blue-600">Ritankar Saha</span>, an aspiring Web3 and Cloud Engineer. My passion lies mainly in <span class="font-medium">backend development</span>, <span class="font-medium">real-time distributed systems</span>, and <span class="font-medium">event-driven architectures</span>.
		  </p>
		  
		  <p class="text-gray-700 leading-relaxed">
			Currently, I'm working with <span class="font-medium">Apache Kafka</span> , <span class="font-medium">Golang and Rust</span>, designing <span class="font-medium">scalable event-driven microservices</span> for real-time data streaming and <span class="font-medium">high-throughput applications</span>.
		  </p>

		  <p class="text-gray-700 leading-relaxed">
			I am also exploring the world of <span class="font-medium">Web3 development</span> and <span class="font-medium">blockchain technologies</span>, building decentralized applications and smart contracts on the Ethereum and Solana blockchain.
		  </p>
		</div>
  
		<!-- Interests Section -->
		<div class="pt-4">
		  <h2 class="text-xl font-semibold text-gray-900 mb-4">My Interests</h2>
		  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<div class="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors duration-300">
			  <div class="flex flex-col space-y-3">
				<div class="space-y-2">
				  <p class="text-gray-800 font-medium">Development</p>
				  <p class="text-gray-600 text-sm">Event-Driven Programming - Kafka & RabbitMQ</p>
				  <p class="text-gray-600 text-sm">Golang and Rust for System Programming</p>
				  <p class="text-gray-600 text-sm">Core Web3 Development</p>
				  <p class="text-gray-600 text-sm">Backend Web Development</p>
				</div>
			  </div>
			</div>
			
			<div class="bg-purple-50 p-4 rounded-lg hover:bg-purple-100 transition-colors duration-300">
			  <div class="flex flex-col space-y-3">
				<div class="space-y-2">
				  <p class="text-gray-800 font-medium">Engineering</p>
				  <p class="text-gray-600 text-sm">Cloud Engineering</p>
				  <p class="text-gray-600 text-sm">Microservices & DevOps</p>
				  <p class="text-gray-600 text-sm">System Design & Scalability</p>
				  <p class="text-gray-600 text-sm">Computer Networking</p>
				  <p class="text-gray-600 text-sm">Machine Learning</p>
				</div>
			  </div>
			</div>
		  </div>
		</div>
  
		<!-- Contact Info -->
		<div class="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg shadow-sm border border-gray-200">
		  <p class="text-gray-900 font-semibold mb-2">Want to connect?</p>
		  <p class="text-gray-700">
			Feel free to email me at 
			<a 
			  href="mailto:ritankar.saha786@gmail.com" 
			  class="text-blue-600 hover:text-blue-800 transition-colors"
			>
			  ritankar.saha786@gmail.com
			</a>
		  </p>
		</div>
	  </div>
	</div>
  </div>
  
  <style>
	/* Additional custom styles if needed */
	:global(body) {
	  margin: 0;
	  padding: 0;
	}
	
	/* Enhance image shadow */
	img {
	  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}
  
	/* Smooth transitions */
	a, div {
	  transition: all 0.3s ease;
	}
  </style>