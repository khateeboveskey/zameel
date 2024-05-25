import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Zameel Docs',
  description: 'Technical docs for Zameel, your never-be-absent classmate.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],
    outline: 'deep',
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Setup', link: '/setup' },
          { text: 'Contribution', link: '/CONTRIBUTING' },
        ],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/khateeboveskey/zameel' }],
  },
  base: '/zameel/',
  lastUpdated: true,
});
