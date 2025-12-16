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
          items: [
            {
              label: "Overview",
              link: "01-project/",
              translations: {
                pl: "Przegląd",
              },
            },
            {
              label: "Introduction",
              translations: {
                pl: "Wprowadzenie",
              },
              autogenerate: {
                directory: "01-project/01-introduction",
                collapsed: true,
              },
            },
            {
              label: "Requirements",
              translations: {
                pl: "Wymagania",
              },
              autogenerate: {
                directory: "01-project/02-requirements",
                collapsed: true,
              },
            },
            {
              label: "Architecture",
              translations: {
                pl: "Architektura",
              },
              autogenerate: {
                directory: "01-project/03-architecture",
                collapsed: true,
              },
            },
            {
              label: "Implementation",
              translations: {
                pl: "Implementacja",
              },
              autogenerate: {
                directory: "01-project/04-implementation",
                collapsed: true,
              },
            },
            {
              label: "Results",
              translations: {
                pl: "Wyniki",
              },
              autogenerate: {
                directory: "01-project/05-results",
                collapsed: true,
              },
            },
          ],
        },
        {
          label: "University documentation",
          translations: {
            pl: "Dokumentacja uczelniana",
          },
          items: [
            {
              label: "Overview",
              link: "02-university/overview",
              translations: {
                pl: "Przegląd",
              },
            },
            {
              label: "Documents",
              items: [
                {
                  label: "Flashcard",
                  link: "02-university/documents/flashcard",
                  translations: {
                    pl: "Fiszka",
                  },
                },
                {
                  label: "Seminar presentation - idea",
                  link: "02-university/documents/seminar-presentation",
                  translations: {
                    pl: "Prezentacja seminarium - pomysł",
                  },
                },
                {
                  label: "Seminar presentation - implementation",
                  link: "02-university/documents/seminar-presentation-implementation",
                  translations: {
                    pl: "Prezentacja seminarium - implementacja",
                  },
                },
                {
                  label: "Poster",
                  link: "02-university/documents/poster",
                  translations: {
                    pl: "Plakat",
                  },
                },
                {
                  label: "ZPI Report",
                  link: "02-university/documents/report",
                  translations: {
                    pl: "Raport ZPI",
                  },
                },
                {
                  label: "ZPI Documentation",
                  link: "02-university/documents/documentation",
                  translations: {
                    pl: "Dokumentacja ZPI",
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
