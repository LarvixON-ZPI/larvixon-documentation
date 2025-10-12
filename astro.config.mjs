// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkHeadingId from "remark-heading-id";
import tailwind from "@astrojs/tailwind";
import liveCode from "astro-live-code";
import react from "@astrojs/react";
import { mermaidRemarkPlugin } from "./src/plugins/mermaid";

// https://astro.build/config
export default defineConfig({
  markdown: {
    // @ts-expect-error ??????
    remarkPlugins: [remarkHeadingId, mermaidRemarkPlugin],
  },
  site: "https://larvixon-zpi.github.io",
  base: "/larvixon-documentation",
  integrations: [
    liveCode({
      defaultProps: {
        "client:load": true,
      },
    }),
    starlight({
      plugins: [
        // Disabled due to base path issue with GitHub Pages
        // starlightLinksValidator({
        //   exclude: ["http://localhost:4321", "/larvixon-documentation/**"],
        // }),
      ],
      defaultLocale: "en",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
      },
      favicon: "favicon.ico",
      title: "LarvixON-ZPI",
      customCss: ["./src/tailwind.css"],
      tableOfContents: true,
      logo: {
        light: "./src/assets/logo_dark_thin.svg",
        dark: "./src/assets/logo_light_thin.svg",
        replacesTitle: true,
      },
      lastUpdated: true,
      components: {
        Head: "./src/overrides/Head.astro",
        SocialIcons: "./src/overrides/SocialIcons.astro",
      },
      social: {
        email: "mailto:272662@pwr.edu.pl",
        github: "https://github.com/LarvixON-ZPI",
      },
      editLink: {
        baseUrl: "https://github.com/LarvixON-ZPI/larvixon-documentation",
      },
      sidebar: [
        {
          label: "Start here!",
          items: [
            {
              label: "Project LarvixON-ZPI",
              link: "/",
            },
            {
              label: "Communication",
              link: "/communication",
            },
          ],
        },
        {
          label: "Project",
          autogenerate: { directory: "project", collapsed: true },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
