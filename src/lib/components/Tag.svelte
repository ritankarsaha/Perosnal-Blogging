<script>
	export let text;
</script>

<a class="cursor-pointer hover:no-underline" href={`/writing?tag=${text}`}>
	<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors duration-200">
		{text}
	</span>
</a>