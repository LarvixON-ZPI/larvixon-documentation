# Larvixon docs

This is the documentation for the LarvixON project.

It is practically a fork of the great [Solvro docs](https://github.com/solvro/web-solvro-docs).

## FAQ

- How to add a new site?

  1. Create a new .md file in the `src/content/docs/project/` folder, e.g. `mario.md`
  2. In the `mario.md` file, you need to write the title and description as frontmatter, for example:

  ```md
  ---
  title: Gaming section
  description: This is the gaming section.
  ---

  Hello this is the content!
  ```

  If adding new section, you need to also edit `astro.config.mjs`

## running locally

Requirements:

- Node.js 20.x

1. Install dependencies

   ```bash
   npm i
   ```

2. Start local server

   ```bash
   npm run dev
   ```

## npm commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm i`                   | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
