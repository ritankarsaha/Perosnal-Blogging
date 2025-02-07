<script>
    export let title;
    export let image;
    
    let isHovered = false;
    
    function handleMouseEnter() {
      isHovered = true;
    }
    
    function handleMouseLeave() {
      isHovered = false;
    }
  </script>
  
  <div 
    class="group flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl 
           transition-all duration-300 transform hover:-translate-y-1"
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
  >
    <div class="relative">
      <div class="w-24 h-24 bg-gray-50 rounded-lg p-3 flex items-center justify-center
                  group-hover:bg-blue-50 transition-colors duration-300">
        <img 
          src={image} 
          alt={title} 
          class="w-16 h-16 object-contain filter drop-shadow-sm
                 group-hover:scale-110 transition-transform duration-300"
        >
      </div>
      {#if isHovered}
        <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
                    bg-blue-600 text-white text-xs px-3 py-1 rounded-full 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    whitespace-nowrap">
          {title}
        </div>
      {/if}
    </div>
    <p class="text-sm font-medium text-gray-700 mt-4 group-hover:text-blue-600 
              transition-colors duration-300">
      {title}
    </p>
  </div>