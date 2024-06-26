<script>
  import FooterText from './FooterText.svelte';

  export let src;
  export let text;
</script>

<div class="flex flex-col items-center my-3">
  <img alt={text} src={src} class="bg-white" />
  <FooterText {text} />
</div>
