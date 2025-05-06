<script>
    export let title;
    export let description;
    export let techStack;
    export let github;
    export let deploy;
    export let demo;
</script>

<div class="h-full flex flex-col p-6">
    <!-- Card Header -->
    <h3 class="text-xl font-display font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
        {title}
    </h3>

    <!-- Description -->
    <p class="text-gray-600 text-base leading-relaxed mb-6 flex-grow line-clamp-3">
        {description}
    </p>

    <!-- Tech Stack -->
    <div class="flex flex-wrap gap-2 mb-6">
        {#each techStack as tech}
            <span class="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-200">
                {tech}
            </span>
        {/each}
    </div>

    <!-- Action Buttons -->
    <div class="flex flex-wrap gap-3 mt-auto">
        {#if github}
            <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg 
                       hover:bg-gray-100 transition-all duration-200 border border-gray-200 hover:border-gray-300"
            >
                <i class="fab fa-github"></i>
                <span>Code</span>
            </a>
        {/if}
        {#if deploy}
            <a
                href={deploy}
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary-600 
                       rounded-lg hover:bg-primary-700 transition-all duration-200"
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
                class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-accent-600 
                       rounded-lg hover:bg-accent-700 transition-all duration-200"
            >
                <i class="fas fa-play"></i>
                <span>Demo</span>
            </a>
        {/if}
    </div>
</div>