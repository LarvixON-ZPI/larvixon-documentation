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
        en: {
          label: "English",
          lang: "en",
        },
        pl: {
          label: "Polski",
          lang: "pl",
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
        email: "mailto:mikolajkubs03@gmail.com",
        github: "https://github.com/LarvixON-ZPI",
      },
      editLink: {
        baseUrl: "https://github.com/LarvixON-ZPI/larvixon-documentation",
      },
      sidebar: [
        {
          label: "Start here!",
          translations: {
            pl: "Zacznij tutaj!",
          },
          items: [
            {
              label: "Project LarvixON-ZPI",
              link: "/",
              translations: {
                pl: "Projekt LarvixON-ZPI",
              },
            },
            {
              label: "Communication",
              link: "/communication",
              translations: {
                pl: "Komunikacja",
              },
            },
          ],
        },
        {
          label: "Project",
          translations: {
            pl: "Projekt",
          },
          autogenerate: { directory: "project", collapsed: true },
        },
        {
          label: "University documentation",
          translations: {
            pl: "Dokumentacja uczelniana",
          },
          items: [
            {
              label: "Overview",
              link: "university/overview",
              translations: {
                pl: "Przegląd",
              },
            },
            {
              label: "Documents",
              items: [
                {
                  label: "Flashcard",
                  link: "university/documents/flashcard",
                  translations: {
                    pl: "Fiszka",
                  },
                },
                {
                  label: "Seminar Presentation",
                  link: "university/documents/seminar-presentation",
                  translations: {
                    pl: "Prezentacja seminarium",
                  },
                },
                {
                  label: "Poster",
                  link: "university/documents/poster",
                  translations: {
                    pl: "Plakat",
                  },
                },
                {
                  label: "ZPI Report",
                  link: "university/documents/report",
                  translations: {
                    pl: "Raport ZPI",
                  },
                },
              ],
              translations: {
                pl: "Dokumenty",
              },
            },
          ],
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
