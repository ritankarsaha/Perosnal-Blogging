<script>
	export let text;
</script>

<a class="cursor-pointer hover:no-underline" href={`/writing?tag=${text}`}>
	<code class="bg-[#f0f0f0] rounded-md !text-[13px] sm:!text-[14px] text-[#0471d7] mx-1 sm:py-[0px] px-2">{text}</code>
</a>
