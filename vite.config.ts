import { defineConfig } from 'vite' //or "import { defineConfig } from 'vite'"" 
import { sveltekit } from '@sveltejs/kit/vite'; //or "import { svelte } from '@sveltejs/vite-plugin-svelte'"
import { svelte } from '@sveltejs/vite-plugin-svelte'
//import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

// https://vitejs.dev/config/
//or export default config;
export default defineConfig({
base: '',
plugins: [sveltekit(), svelte()],

})
