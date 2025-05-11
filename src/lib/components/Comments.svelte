<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, slide } from 'svelte/transition';
  
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
    let editName = '';
    let editContent = '';
  
    onMount(async () => {
      const res = await fetch(`/api/comments/${postSlug}`);
      comments = res.ok ? await res.json() : [];
      loading = false;
    });
  
    let newName = '';
    let newContent = '';
    let isSubmitting = false;
  
    async function submit() {
      if (!newName.trim() || !newContent.trim()) return;
      
      isSubmitting = true;
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
      isSubmitting = false;
    }
  
    async function remove(id: string) {
      if (!confirm('Are you sure you want to delete this comment?')) return;
      
      comments = comments.filter(c => c.id !== id);
      await fetch(`/api/comments/${postSlug}/${id}`, { method: 'DELETE' });
    }
  
    function startEdit(c: Comment) {
      editingId = c.id;
      editName = c.name;
      editContent = c.content;
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
  
<section>
    <h2 class="text-2xl font-bold mb-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
        Comments {comments.length > 0 ? `(${comments.length})` : ''}
    </h2>
  
    <form on:submit|preventDefault={submit} class="space-y-4 mb-10 bg-gray-50 p-6 rounded-lg shadow-sm">
        <h3 class="text-lg font-medium mb-4">Leave a comment</h3>
        <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
                id="name"
                type="text" 
                bind:value={newName}
                placeholder="Your name" 
                required
                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all"
            />
        </div>
        <div>
            <label for="comment" class="block text-sm font-medium text-gray-700 mb-1">Comment</label>
            <textarea
                id="comment"
                rows="4" 
                bind:value={newContent}
                placeholder="Share your thoughts..." 
                required
                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all"
            ></textarea>
        </div>
        <button
            type="submit"
            disabled={isSubmitting}
            class="bg-primary-600 text-white px-5 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-300 flex items-center font-medium disabled:opacity-70"
        >
            {#if isSubmitting}
                <svg class="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
            {:else}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Post Comment
            {/if}
        </button>
    </form>
  
    {#if loading}
        <div class="flex justify-center py-8">
            <svg class="animate-spin h-8 w-8 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </div>
    {:else if comments.length > 0}
        <ul class="space-y-6">
            {#each comments as c, i}
                <li 
                    class="border rounded-lg p-5 bg-white shadow-sm transition-all hover:shadow-md"
                    in:fade={{ duration: 300, delay: i * 100 }}
                >
                    {#if editingId === c.id}
                        <div class="space-y-3" transition:slide={{ duration: 150 }}>
                            <input
                                type="text" 
                                bind:value={editName}
                                class="w-full border border-gray-300 rounded-lg px-3 py-2 mb-2 focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none"
                            />
                            <textarea
                                bind:value={editContent}
                                rows="3"
                                class="w-full border border-gray-300 rounded-lg px-3 py-2 mb-2 focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none"
                            ></textarea>
                            <div class="flex gap-2">
                                <button 
                                    on:click={() => saveEdit(c.id)}
                                    class="bg-green-600 text-white px-4 py-1 rounded-md text-sm hover:bg-green-700 transition-colors"
                                >
                                    Save
                                </button>
                                <button 
                                    on:click={cancelEdit}
                                    class="bg-gray-300 text-gray-800 px-4 py-1 rounded-md text-sm hover:bg-gray-400 transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    {:else}
                        <div class="flex justify-between items-start">
                            <div class="flex-1">
                                <div class="flex items-center mb-2">
                                    <div class="h-9 w-9 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-medium mr-3">
                                        {c.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <p class="font-semibold text-gray-800">{c.name}</p>
                                        <p class="text-xs text-gray-500">
                                            {new Date(c.createdAt).toLocaleString(undefined, {
                                                year: 'numeric', 
                                                month: 'short', 
                                                day: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </p>
                                    </div>
                                </div>
                                <p class="mt-3 text-gray-700 whitespace-pre-line">{c.content}</p>
                            </div>
                            <div class="ml-4 flex flex-col gap-2 items-end">
                                <button 
                                    on:click={() => startEdit(c)}
                                    class="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    Edit
                                </button>
                                <button 
                                    on:click={() => remove(c.id)}
                                    class="flex items-center text-sm text-red-600 hover:text-red-800 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    Delete
                                </button>
                            </div>
                        </div>
                    {/if}
                </li>
            {/each}
        </ul>
    {:else}
        <div class="text-center py-10 bg-gray-50 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p class="text-gray-600 font-medium">No comments yet</p>
            <p class="text-gray-500 text-sm mt-1">Be the first to share your thoughts!</p>
        </div>
    {/if}
</section>