---
title: Fixing VSCode "go to definition" in webpack projects

short: Troubleshooting VSCode's 'go to definition' feature in webpack-based projects
date: '2024-04-04'
slug: fix-vscode-path-imports
createdAt: '2024-04-04'
img: blog-2.jpg


tags:
  - Tutorial
---

# Fixing VSCode "go to definition" in webpack projects

If you press Command and left-click an import statement in VSCode, it opens the file of the defined import in a new tab. This is a handy feature when traversing components and dependencies across a big React project, but for some reason, it didn't work with the codebase I maintain at Rapid7. 

The issue was caused by VSCode not being able to resolve the path provided in the `import` statement, because my import paths were actually wrong. For example, in a file called `scanConfigTableActions.js`, an object is imported like this:

```js
import * as historyUtils from 'utils/historyUtils';
```

The code runs fine, but `historyUtils.js` is in a completely different part of the project's file tree, so `utils/historyUtils` is not the correct relative import between the two files.

```txt
src/
└── js/
    ├── components/
    │   └── app/
    │       └── scanConfigs/
    │           └── scanConfigTableActions.js
    └── utils/
        └── historyUtils.js
```

## webpack and jsconfig.json
The reason this non-relative import path resolves OK is because the project's `webpackconfig.js` defines `src/js` as a path to resolve module from, meaning that import statements don't need to specify this part of the path. This means that `utils/historyUtils.js` is the same as writing `src/js/utils/historyUtils.js`.

This is what was included in the project's `webpack.config.js`:

```json
{
"resolve": {
    "modules": [path.resolve(__dirname, "src/js"), "node_modules"],
}
```

VSCode's tooling isn't aware of these paths though. You have to let VSCode know about this by adding the module resolution paths to a jsconfig.json or tsconfig.json file at the root of your project.

In my case, I added `src/js` as a path:
```json
// jsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".", // This must be specified if "paths" is.
    "paths": {
      "utils/*": ["src/js/*"],
    }
  },
  "include": ["src/**/*"]
}
```