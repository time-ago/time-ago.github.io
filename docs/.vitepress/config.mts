import type { HeadConfig, TransformContext } from 'vitepress'
import { defineVersionedConfig } from '@viteplus/versions'
import { versions, latestVersion, outdatedVersions } from './theme/versions'
import { resolve } from 'node:path'

const hostname = 'https://timeago.serhiicho.com'
const excludeSitemapPrefixes = outdatedVersions.map(v => `${v}/`)

function setCanonicalTag(page: string): string {
    page = page.replace('.md', '.html')
    return page == 'index.html' ? hostname : `${hostname}/${page}`
}

export default defineVersionedConfig(
    {
        lang: 'en-US',
        title: 'Timeago',
        head: [['link', { rel: 'icon', href: '/images/favicon.png' }]],
        description: "Fast and lightweight date time library that converts given date into 'n time ago' format",

        transformHead: (ctx: TransformContext) => {
            const head: HeadConfig[] = []
            head.push(['link', { rel: 'canonical', href: setCanonicalTag(ctx.page) }])
            return head
        },

        versionsConfig: {
            current: latestVersion,
            versionSwitcher: false,
        },

        lastUpdated: true,

        vite: {
            resolve: {
                alias: {
                    '@': resolve(import.meta.dirname, './theme'),
                },
            },
        },

        sitemap: {
            hostname,
            // exclude old version pages from sitemap
            transformItems: items => items.filter(item => !excludeSitemapPrefixes.some(p => item.url.startsWith(p)))
        },

        themeConfig: {
            logo: '/images/logo.png',
            footer: {
                message: 'Released under the <a href="https://codeberg.org/timeago/timeago/src/branch/master/LICENSE.md" target="_blank">MIT License</a>',
                copyright: 'Copyright © 2019 - present <a href="https://serhiicho.com/about-me" target="_blank">Serhii Cho</a>',
            },

            search: {
                provider: 'local',
            },

            nav: {
                root: [
                    { component: 'VersionSwitcher', props: { versions, latestVersion }},
                    { text: 'Guide', link: '/guide' },
                    { text: 'Community', link: '/community', skipVersioning: true },
                    {
                        text: 'Changelog',
                        link: 'https://codeberg.org/timeago/timeago/src/branch/master/CHANGELOG.md',
                    },
                ],
            },
            sidebar: {
                '/v1/': [
                    { text: 'Get Started', link: '/guide' },
                    { text: 'Contribute', link: '/contribute' },
                    { text: 'Configurations', link: '/configurations' },
                ],
                '/v2/': [
                    {
                        text: 'Guide',
                        items: [
                            { text: 'Get Started', link: '/guide' },
                            { text: 'Configurations', link: '/configurations' },
                            { text: 'Options', link: '/options' },
                        ],
                    },
                    {
                        text: 'Information',
                        items: [
                            {
                                text: 'What is Timeago?',
                                link: '/what-is-timeago',
                            },
                            { text: 'Contribute', link: '/contribute' },
                        ],
                    },
                ],
                '/': [
                    {
                        text: 'Guide',
                        items: [
                            { text: 'Installation', link: '/guide' },
                            { text: 'Usage Guide', link: '/usage' },
                            { text: 'Configurations', link: '/configurations' },
                            { text: 'Options', link: '/options' },
                            { text: 'Upgrade Guide', link: '/upgrade' },
                        ],
                    },
                    {
                        text: 'Information',
                        items: [
                            {
                                text: 'What is Timeago?',
                                link: '/what-is-timeago',
                            },
                            { text: 'Contribute', link: '/contribute' },
                        ],
                    },
                ],
            },

            socialLinks: [
                {
                    icon: 'go',
                    ariaLabel: 'Golang',
                    link: 'https://pkg.go.dev/codeberg.org/timeago/timeago/v3',
                },
                {
                    icon: 'codeberg',
                    ariaLabel: 'Codeberg',
                    link: 'https://codeberg.org/timeago/timeago',
                },
            ],
        },
    },
)
