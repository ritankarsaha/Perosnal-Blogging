<script lang="ts">
    import { onMount } from 'svelte';
  
    export let postSlug: string;
  
    type Comment = {
      id: string;
      name: string;
      content: string;
      createdAt: string;
    };
  
    let comments: Comment[] = [];
    let loading = true;
  

    let editingId: string | null = null;
    let editName    = '';
    let editContent = '';
  
    onMount(async () => {
      const res = await fetch(`/api/comments/${postSlug}`);
      comments = res.ok ? await res.json() : [];
      loading  = false;
    });
  
    // submit new comment
    let newName = '';
    let newContent = '';
  
    async function submit() {
      if (!newName.trim() || !newContent.trim()) return;
      const res = await fetch(`/api/comments/${postSlug}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newName, content: newContent })
      });
      if (res.ok) {
        const added = await res.json();
        comments = [added, ...comments];
        newName = '';
        newContent = '';
      }
    }
  
    async function remove(id: string) {
      comments = comments.filter(c => c.id !== id);
      await fetch(`/api/comments/${postSlug}/${id}`, { method: 'DELETE' });
    }
  
    function startEdit(c: Comment) {
      editingId    = c.id;
      editName     = c.name;
      editContent  = c.content;
    }
  
    function cancelEdit() {
      editingId = null;
    }
  
    async function saveEdit(id: string) {
      if (!editName.trim() || !editContent.trim()) return;
  
      const res = await fetch(`/api/comments/${postSlug}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: editName, content: editContent })
      });
  
      if (res.ok) {
        const updated = await res.json();
        comments = comments.map(c => c.id === id ? { ...c, ...updated } : c);
        editingId = null;
      }
    }
  </script>
  
  <section class="mt-12">
    <h2 class="text-2xl font-semibold mb-4">Comments</h2>
  
    <!-- New comment form -->
    <form on:submit|preventDefault={submit} class="space-y-4 mb-8">
      <input
        type="text" bind:value={newName}
        placeholder="Your name" required
        class="w-full border rounded px-3 py-2"
      />
      <textarea
        rows="4" bind:value={newContent}
        placeholder="Write a comment…" required
        class="w-full border rounded px-3 py-2"
      ></textarea>
      <button
        type="submit"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit Comment
      </button>
    </form>
  
    {#if loading}
      <p>Loading comments…</p>
    {:else if comments.length > 0}
      <ul class="space-y-6">
        {#each comments as c}
          <li class="border rounded p-4 bg-white shadow-sm">
            {#if editingId === c.id}
              <!-- Edit form -->
              <input
                type="text" bind:value={editName}
                class="w-full border rounded px-2 py-1 mb-2"
              />
              <textarea
                bind:value={editContent}
                class="w-full border rounded px-2 py-1 mb-2"
              ></textarea>
              <div class="flex gap-2">
                <button on:click={() => saveEdit(c.id)}
                        class="bg-green-500 text-white px-3 py-1 rounded">
                  Save
                </button>
                <button on:click={cancelEdit}
                        class="bg-gray-300 text-gray-800 px-3 py-1 rounded">
                  Cancel
                </button>
              </div>
            {:else}
              <!-- Display comment -->
              <div class="flex justify-between items-start">
                <div>
                  <p class="font-medium">{c.name}</p>
                  <p class="mt-1">{c.content}</p>
                  <p class="text-xs text-gray-500 mt-2">
                    {new Date(c.createdAt).toLocaleString()}
                  </p>
                </div>
                <div class="flex flex-col gap-1">
                  <button on:click={() => startEdit(c)}
                          class="text-sm text-blue-600 hover:underline">
                    Edit
                  </button>
                  <button on:click={() => remove(c.id)}
                          class="text-sm text-red-600 hover:underline">
                    Delete
                  </button>
                </div>
              </div>
            {/if}
          </li>
        {/each}
      </ul>
    {:else}
      <p class="text-gray-600">Be the first to leave a comment!</p>
    {/if}
  </section>
  