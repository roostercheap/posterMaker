import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte'],
  
  // Preprocessor configuration
  preprocess: [vitePreprocess()],

  kit: {
    // Use the Vercel adapter
    adapter: adapter({
      runtime: 'nodejs20.x', // Explicitly set Node.js version to 20.x
    })
  }
};

export default config;
