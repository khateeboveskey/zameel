import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Zameel Docs',
  description: 'Technical docs for Zameel, your never-be-absent classmate.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/guide/setup' },
      { text: 'API Reference', link: '/api-reference/create-comp' },
    ],
    outline: 'deep',
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          collapsed: true,
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Setup', link: '/guide/setup' },
            { text: 'Contribution', link: '/guide/CONTRIBUTING' },
          ],
        },
      ],
      '/api-reference/': [
        {
          text: 'Scripts',
          collapsed: true,
          items: [{ text: 'Create Component', link: '/api-reference/create-comp' }],
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/khateeboveskey/zameel' }],
  },
  base: '/zameel/',
  lastUpdated: true,
});
