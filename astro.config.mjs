// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://uksdc.leowilkin.com',
    integrations: [starlight({
        title: 'Unofficial UKSDC Docs',
		editLink: {
			baseUrl: 'https://github.com/leowilkin/uksdc-docs/edit/main/',
		},
        logo: {
            light: './src/assets/light.png',
            dark: './src/assets/dark.png',
        },
        social: [
			{ icon: 'open-book', label: 'UKSDC Homepage', href: 'https://uksdc.org/' },
			{ icon: 'github', label: 'GitHub', href: 'https://github.com/leowilkin/uksdc-docs' },
		],
        sidebar: [
            {
                label: 'Prime Contractors',
                autogenerate: { directory: 'prime-contractors' },
            },
            {
                label: 'Subcontractors',
                autogenerate: { directory: 'subcontractors' },
            },
            {
                label: 'RFP Sections',
                autogenerate: { directory: 'rfp' },
            },
            {
                label: 'The Foundation Society',
                autogenerate: { directory: 'foundation-society' },
            }
        ],
		}), sitemap()],
});