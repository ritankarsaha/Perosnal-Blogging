<script>
    export let title;
    export let description;
    export let techStack;
    export let github;
    export let deploy;
    export let demo;
</script>

<div class="group h-[400px] bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-200">
    <div class="relative p-6 flex flex-col h-full">
        <!-- Card Content -->
        <div class="flex-1 z-10">
            <!-- Title -->
            <h3 class="text-xl font-bold text-gray-900 mb-3 font-display group-hover:text-blue-600 transition-colors duration-200">
                {title}
            </h3>

            <!-- Description with fixed height -->
            <p class="text-gray-600 text-base leading-relaxed font-sans mb-6 line-clamp-3">
                {description}
            </p>

            <!-- Tech Stack with fixed position -->
            <div class="flex flex-wrap gap-2 mb-6">
                {#each techStack as tech}
                    <span class="inline-flex items-center px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 rounded-full ring-1 ring-blue-100 hover:bg-blue-100 transition-colors duration-200">
                        {tech}
                    </span>
                {/each}
            </div>

            <!-- Action Buttons fixed to bottom -->
            <div class="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
                {#if github}
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg 
                               hover:bg-gray-100 transition-all duration-200 border border-gray-200 hover:border-gray-300
                               hover:shadow-md"
                    >
                        <i class="fab fa-github text-lg"></i>
                        <span>Code</span>
                    </a>
                {/if}
                {#if deploy}
                    <a
                        href={deploy}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 
                               rounded-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-md"
                    >
                        <i class="fas fa-external-link-alt"></i>
                        <span>Live Site</span>
                    </a>
                {/if}
                {#if demo}
                    <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-600 
                               rounded-lg hover:bg-green-700 transition-all duration-200 hover:shadow-md"
                    >
                        <i class="fas fa-play"></i>
                        <span>Demo</span>
                    </a>
                {/if}
            </div>
        </div>
    </div>
</div>

<style>
    /* Ensure proper font loading */
    :global(.font-display) {
        font-family: 'Inter', system-ui, sans-serif;
    }
</style>