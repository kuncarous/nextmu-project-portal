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
    output: 'hybrid',
    vite: {
        ssr: {
            external: ['node:async_hooks'],
        },
    },
    adapter: cloudflare({
        platformProxy: {
            enabled: true,
            configPath: 'wrangler.toml',
        },
    }),
    i18n: {
        defaultLocale: 'en-us',
        locales: ['en-us', 'es-es', 'pt-br'],
        routing: {
            prefixDefaultLocale: true,
        },
    },
    redirects: {
        '/': {
            status: 301,
            destination: '/en-us/',
        },
    },
    build: {
        redirects: false,
    },
});
