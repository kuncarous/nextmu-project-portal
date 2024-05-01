import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import paraglide from '@inlang/paraglide-astro';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    integrations: [
        svelte(),
        tailwind(),
        paraglide({
            project: './project.inlang',
            outdir: './src/paraglide',
        }),
    ],
    output: 'server',
    adapter: cloudflare(),
    i18n: {
        defaultLocale: 'en-us',
        locales: ['en-us', 'es-es', 'pt-br'],
        routing: {
            prefixDefaultLocale: true,
        },
    },
});
