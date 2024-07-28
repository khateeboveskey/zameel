import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zameel Docs",
  description: "Technical docs for Zameel, your never-be-absent classmate.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "Setup", link: "/setup" },
      { text: "Contribution", link: "/CONTRIBUTING" }
    ],
    outline: "deep",
    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Setup", link: "/setup" },
          { text: "Contribution", link: "/CONTRIBUTING" }
        ]
      },
      {
        text: "Scripts",
        collapsed: true,
        items: [
          { text: "Introduction", link: "/scripts/introduction" },
          { text: "create:comp", link: "/scripts/create-comp" },
          { text: "create:view", link: "/scripts/create-view" },
          { text: "create:store", link: "/scripts/create-store" }
        ]
      }
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/khateeboveskey/zameel" }]
  },
  base: "/zameel/",
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/zameel/logo.svg" }]]
});
