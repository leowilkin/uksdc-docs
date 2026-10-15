// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import starlightLinksValidator from 'starlight-links-validator';
import starlightLlmsTxt from 'starlight-llms-txt';
import starlightScrollToTop from 'starlight-scroll-to-top';
import starlightVersions from 'starlight-versions'
import starlightTelescope from 'starlight-telescope'
import starlightSidebarTopics from 'starlight-sidebar-topics'
import versionsTopicsBridge from './src/plugins/versions-topics-bridge/index.mjs'

const versions = [{ slug: '1.0' }]

export default defineConfig({
    site: 'https://uksdc.leowilkin.com',
    integrations: [
        starlight({
            plugins: [
                starlightLinksValidator(),
                starlightLlmsTxt(),
                starlightScrollToTop(),
                starlightTelescope(),
                versionsTopicsBridge({ versions }),
                starlightSidebarTopics(
                    [
                        {
                            label: 'Guides',
                            link: '/guides/',
                            icon: 'open-book',
                            items: [
                                { label: 'Overview', slug: 'guides' },
                                'guides/fermi-approximations',
                                'guides/costs',
                                'guides/casssc-specification',
                                { label: 'RFP Sections', items: [{ autogenerate: { directory: 'guides/rfp' } }] },
                            ],
                        },
                        {
                            label: 'Companies',
                            link: '/prime-contractors/',
                            icon: 'rocket',
                            items: [
                                { label: 'Prime Contractors', items: [{ autogenerate: { directory: 'prime-contractors' } }] },
                                {
                                    label: 'Subcontractors',
                                    items: [
                                        { label: 'Overview', slug: 'subcontractors' },
                                        { label: 'Materials and Manufacturing', items: [{ autogenerate: { directory: 'subcontractors/materials-and-manufacturing' } }] },
                                        { label: 'Electrical', items: [{ autogenerate: { directory: 'subcontractors/electrical' } }] },
                                        { label: 'Life Support', items: [{ autogenerate: { directory: 'subcontractors/life-support' } }] },
                                        { label: 'Logistics', items: [{ autogenerate: { directory: 'subcontractors/logistics' } }] },
                                    ],
                                },
                                { label: 'The Foundation Society', items: [{ autogenerate: { directory: 'foundation-society' } }] },
                            ],
                        },
                    ],
                    {
                        exclude: ['/1.0/**', '/404'],
                    },
                ),
                starlightVersions({ versions }),
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
        }),
        sitemap()
    ],
});