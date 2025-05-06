<script>
  import FooterText from './FooterText.svelte';

  export let src;
  export let text;
</script>

<div class="flex flex-col items-center my-6">
  <div class="rounded-lg overflow-hidden shadow-md border border-gray-100">
    <img alt={text} src={src || "/placeholder.svg"} class="bg-white max-w-full h-auto" />
  </div>
  <FooterText {text} />
</div>