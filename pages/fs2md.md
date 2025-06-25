---

title: fs2md - File system to markdown

short: A CLI tool for grabbing contents of directories as markdown

date: '2025-06-25'

slug: fs2md

createdAt: '2025-06-25'

img: blog-2.jpg

tags:

- Release

---
## fs2md - CLI utility for mapping your filesystem into markdown

I built a small CLI utility called `fs2md` (filesystem to markdown). It walks a directory and converts the contents of accepted files into a single markdown document. It also adds a visual file tree at the top of the output.

You can install it by running `npm install -g fs2md` and you can read [the documentation](https://github.com/PaulTreanor/fs2md) to see all it's features. 

I originally created it to quickly copy the contents of specific subdirectories directly into Gemini's web chat, which can sometimes be more useful than using AI coding agents when debugging because it only uses context you provide to it. fs2md makes it easier to get this context. 

**Features**

You can point it at any directory you want it to copy, and it takes optional flags for outputting to a file, ignoring patterns, only including specific file extensions, and limiting larger files (by token size or bytes).

**How I like to use it**

I find it's useful to grab the contents of a folder and then copy that into sublime text or another markdown editor to create a useful prompt. 


Here's a practical example, but most of the time I just use it without any options:

```bash
fs2md ./src/components -e .tsx,.css -x "*.test.*" -b 50k
```

This command creates markdown for all `.tsx` and `.css` files under `src/components`, skips any test files (`*.test.*`), and omits files larger than 50 KB.
