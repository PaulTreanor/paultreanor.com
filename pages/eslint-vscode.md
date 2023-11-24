---
title: Auto-formatting JS with ESlint and VSCode
short: Setting up formatting on save with ESlint and VSCode
date: '2023-07-07'
slug: eslint-vscode
createdAt: '2023-07-07'
img: blog-2.jpg


tags:
  - Tutorial
---

# Auto-formatting JS with ESlint and VSCode

I want ESlint to enforce StandardJS and format files automatically when I save them in VSCode. This took me far too long to figure out, but it’s one of the first things I do on all new JavaScript projects.

### Install ESlint

```bash
npx eslint --init

# Run through your setup options, you should select:
# - "To check syntax, find problems, and enforce code style"
# - "JavaScript Modules (import/export)"
# - "Use a popular style guide" -> "Standard"
# Select yes for installing the recommended dependencies 

# You can now run eslint with this command 
npx eslint .
```

### Set up format on save in VSCode

1. Install the [ESlint VSCode plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Make a file called `settings.json` in a folder called `.vscode` in the root of your project.
3. Add this to `settings.json`

```json
{
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
	}
}
```

And that’s it! ✨