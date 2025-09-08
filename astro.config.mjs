// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import starlightLinksValidator from 'starlight-links-validator';
import { viewTransitions } from "astro-vtbot/starlight-view-transitions";
import starlightLlmsTxt from 'starlight-llms-txt';
import starlightScrollToTop from 'starlight-scroll-to-top';

export default defineConfig({
    site: 'https://uksdc.leowilkin.com',
    integrations: [starlight({
        plugins: [
            starlightLinksValidator(),
            viewTransitions(),
            starlightLlmsTxt(),
            starlightScrollToTop(),
        ],
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