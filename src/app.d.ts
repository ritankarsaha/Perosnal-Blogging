/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs#typescript
// for information about these interfaces
declare namespace App {
  interface Locals {}

  interface Platform {}

  interface Session {}

  interface Stuff {}

  interface MdsvexFile {
    default: import('svelte/internal').SvelteComponent;
    metadata: Metadata;
  }

  interface Metadata {
    title: string;
    description: string;
    tags: string[];
    date: string;
    published: bool;
  }

  type MdsvexResolver = () => Promise<MdsvexFile>;

  interface Post {
    slug: string;
    title: string;
    description: string;
    date: string;
    published: boolean;
    tags: string[]
  }
}
