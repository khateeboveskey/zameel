import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zameel Docs",
  description: "Technical docs for Zameel, your never-be-absent classmate.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Contribution', link: '/CONTRIBUTING' }
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Introduction', link: '/components/introduction' },
          { text: 'File Upload', link: '/components/file-upload' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/khateeboveskey/zameel' }
    ]
  },
  base: '/zameel/'
})
