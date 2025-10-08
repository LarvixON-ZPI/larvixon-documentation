// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkHeadingId from "remark-heading-id";
import tailwind from "@astrojs/tailwind";
import liveCode from "astro-live-code";
import react from "@astrojs/react";
import starlightLinksValidator from "starlight-links-validator";
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
      defaultLocale: "pl",
      locales: {
        root: {
          label: "Polski",
          lang: "pl",
        },
      },
      favicon: "favicon.ico",
      title: "LarvixON-ZPI",
      customCss: ["./src/tailwind.css"],
      tableOfContents: true,
      logo: {
        light: "./src/assets/logo_dark.png",
        dark: "./src/assets/logo_white.png",
        replacesTitle: true,
      },
      lastUpdated: true,
      head: [
        {
          tag: "script",
          attrs: {
            src: "https://analytics.solvro.pl/script.js",
            "data-website-id": "8d083e9b-5ad6-4abb-b9b2-4c855adb18b0",
            defer: true,
            "data-domains": "docs.solvro.pl",
          },
        },
      ],
      components: {
        Head: "./src/overrides/Head.astro",
        SocialIcons: "./src/overrides/SocialIcons.astro",
      },
      social: {
        email: "mailto:kn.solvro@pwr.edu.pl",
        facebook: "https://www.facebook.com/knsolvro",
        github: "https://github.com/solvro/web-solvro-docs",
        linkedin: "https://www.linkedin.com/company/knsolvro",
      },
      editLink: {
        baseUrl: "https://github.com/Solvro/web-solvro-docs/edit/main/",
      },
      sidebar: [
        {
          label: "Zacznij tu!",
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
          label: "Projekt",
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
