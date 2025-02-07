<script>
    export let title;
    export let description;
    export let language;
    export let prLink;
    export let languageColor;
    
    let isHovered = false;
    
    const getPRNumber = (title) => {
        const match = title.match(/#(\d+)/);
        return match ? match[1] : '';
    };
    
    const getRepoName = (title) => {
        return title.split(' ')[0];
    };
</script>

<div class="transform hover:-translate-y-2 transition-all duration-300 block"
     on:mouseenter={() => isHovered = true}
     on:mouseleave={() => isHovered = false}>
    <div class="relative flex flex-col bg-white shadow-lg rounded-xl p-6 
                hover:shadow-2xl transition-all border border-gray-200/50 
                overflow-hidden group backdrop-blur-sm">
        <!-- Animated Background Pattern -->
        <div class="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
            <div class="absolute top-0 right-0 w-40 h-40 transform translate-x-20 -translate-y-20 
                        rounded-full blur-2xl"
                 style="background-color: {languageColor};">
            </div>
            <div class="absolute bottom-0 left-0 w-32 h-32 transform -translate-x-16 translate-y-16 
                        rounded-full blur-xl opacity-50"
                 style="background-color: {languageColor};">
            </div>
        </div>

        <!-- Content -->
        <div class="relative z-10">
            <!-- Header -->
            <div class="flex justify-between items-start mb-4">
                <div class="flex-1">
                    <!-- GitHub Icon and PR Number -->
                    <div class="flex items-center space-x-2 mb-2">
                        <svg class="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        <span class="text-sm font-medium text-gray-500">
                            PR #{getPRNumber(title)}
                        </span>
                    </div>
                    <!-- Repo Name -->
                    <h2 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 
                             transition-colors tracking-tight">
                        {getRepoName(title)}
                    </h2>
                </div>
                <!-- Language Badge -->
                <div class="flex items-center px-3 py-1.5 rounded-full bg-gray-50 
                          group-hover:bg-opacity-70 transition-all"
                     style="background-color: {languageColor}20">
                    <span class="w-2.5 h-2.5 rounded-full mr-2" 
                          style="background-color: {languageColor};">
                    </span>
                    <span class="text-sm font-medium" 
                          style="color: {languageColor};">
                        {language}
                    </span>
                </div>
            </div>

            <!-- Description -->
            <p class="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                {description}
            </p>

            <!-- Footer -->
            <div class="flex justify-between items-center pt-2 border-t border-gray-100">
                <a href={prLink} 
                   target="_blank"
                   class="flex items-center text-sm font-medium text-blue-600 
                          opacity-0 group-hover:opacity-100 transition-all duration-300
                          hover:text-blue-700">
                    View Pull Request
                    <svg 
                        class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                </a>
                <!-- Merge Status Indicator -->
                <div class="flex items-center">
                    <span class="flex w-2 h-2 rounded-full bg-green-400"></span>
                    <span class="ml-2 text-xs text-gray-500">Merged</span>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    /* Optional: Add custom styles for better blur support */
    .backdrop-blur-sm {
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
    }
</style>