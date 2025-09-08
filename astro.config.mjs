// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Unofficial UKSDC Docs',
			social: [{ icon: 'open-book', label: 'UKSDC Homepage', href: 'https://uksdc.org/' }],
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
		}),
	],
});
