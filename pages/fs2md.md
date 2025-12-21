---
title: fs2md - File system to markdown
short: A CLI tool for converting directory contents to markdown
date: '2025-12-21'
slug: fs2md
createdAt: '2025-12-21'
img: blog-2.jpg
tags:
- Release
---

## fs2md - CLI utility for mapping your filesystem into markdown
I built a small CLI utility called `fs2md` (filesystem to markdown). It walks a directory and converts file contents into a single markdown document, with a visual file tree at the top.

Perfect for pasting context into LLMs.

You can install it by running `npm install -g fs2md` or use it directly with `npx fs2md`. Read [the documentation](https://github.com/PaulTreanor/fs2md) for all features.

I originally created it to quickly copy specific code into Claude or Gemini's web chat, which can sometimes be more useful than using AI coding agents when debugging because you control exactly what context goes in. fs2md makes this trivial.

**Features**

- **Smart defaults**: Automatically excludes `node_modules` and `.git`
- **Flexible filtering**: Include or exclude files with glob patterns
- **Pipe or save**: Output to stdout or write to file

**How I like to use it**

Most of the time I just run `fs2md .` in my project root, copy the output, paste it into Sublime Text or Claude, and refine my prompt from there. The visual tree helps verify I'm including the right files.

For more focused contexts, I use include patterns:

```bash
# Only TypeScript components, no tests
fs2md ./src/components -i "**/*.tsx" -x "**/*.test.ts" | pbcopy

# Specific directories only
fs2md . -i "src/**, lib/**" -o context.md

# Exclude binary files
fs2md . -x "**/*.{png,jpg,gif,pdf}"
```
