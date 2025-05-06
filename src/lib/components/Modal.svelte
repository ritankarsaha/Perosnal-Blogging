<script>
  export let showModal; // boolean
  let dialog; // HTMLDialogElement

  $: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
  class="rounded-lg shadow-xl border border-gray-200 p-0 backdrop:bg-gray-900/50 backdrop:backdrop-blur-sm"
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click|stopPropagation class="max-w-md w-full">
    <div class="p-5">
      <slot name="header" />
    </div>
    <hr class="border-gray-200" />
    <div class="p-5">
      <slot />
    </div>
    <hr class="border-gray-200" />
    <div class="p-5 flex justify-end">
      <!-- svelte-ignore a11y-autofocus -->
      <button 
        autofocus 
        on:click={() => dialog.close()}
        class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg text-sm font-medium transition-colors"
      >
        Close
      </button>
    </div>
  </div>
</dialog>

<style>
  dialog {
    max-width: 32em;
    border-radius: 0.5rem;
    border: none;
    padding: 0;
  }

  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }

  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes zoom {
    from {
      transform: scale(0.95);
    }

    to {
      transform: scale(1);
    }
  }

  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
</style>