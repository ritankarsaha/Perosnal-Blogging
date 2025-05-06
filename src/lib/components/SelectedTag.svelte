<script>
	export let text;
</script>

<a href={`/writing`}>
	<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200">
		{text}
		<svg class="ml-1.5 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
		</svg>
	</span>
</a>