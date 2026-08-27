# blog

Jimmy Kim's tech blog. Astro + Markdown, deployed to GitHub Pages at <https://iam-jimmy.github.io/blog/>.

## Writing a post

Add a Markdown file under `src/content/posts/`. The file name becomes the URL.

```md
---
title: "Post title"
description: "One-line summary shown in the list and RSS"
pubDate: 2026-08-27
updatedDate: 2026-09-01   # optional
tags: [nestjs, kubernetes] # optional
draft: true                # optional — visible in dev only
---
```

## Commands

| Command        | Action                                   |
| :------------- | :--------------------------------------- |
| `pnpm install` | Install dependencies                     |
| `pnpm dev`     | Start dev server at `localhost:4321/blog` |
| `pnpm build`   | Build to `./dist/`                       |
| `pnpm preview` | Preview the build locally                |

Pushing to `main` triggers the deploy workflow.
