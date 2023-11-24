---
title: Advice on building production applications in Gatsby in 2023
short: Some lessons learned in using Gatsby in late 2023
date: '2023-11-23'
slug: gatsby
createdAt: '2023-11-23'
img: blog-2.jpg


tags:
  - Note
---

# Advice on building production applications in Gatsby in 2023

I've been building an educational web application for the past few weeks, and I went with Gatsby for the frontend. My main reason for choosing Gatsby was because I'm familiar with the framework, and that lets me move fast. This got me thinking about whether or not Gatsby's a good choice for other projects. 

**Why use Gatsby?**
- If you need very fast static pages 
- If you want to easily deploy to static hosts 
- If you want a framework that's closer to barebones React

**Why avoid Gatsby?**
- If you have a slow dev machine (build times are painful)
- If you're building a very large app/site with dozens of pages
- If you are working with a team (I think slower feedback loops will compound)

Again, maybe the biggest factor that should affect your choice is just using what you are familiar with. I don't think choosing the latest tools for every single project is necessary or wise. 

If you do decide to go with Gatsby then here's my advice:
  
## 1. Limit complexity
**YAGNI**. ``Save yourself`` the mental bandwidth and cut out as much Gatsby boilerplate as you possibly can: this will speed up your build times, the speed that you can work at, and it will save you from endless bugs. 

You [don't need the GraphQL](https://www.gatsbyjs.com/docs/how-to/querying-data/using-gatsby-without-graphql/) to fetch your data and you don't need [sitemap](https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/), [gtag](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/), and [gatbsy-image](https://www.gatsbyjs.com/plugins/gatsby-image/) plugins. I ended up tearing these plugins out and just using `<img>` tags for images (with no negative effect on page speed). Gatsby's weakness is its overly big API surface area, try to avoid the bad stuff and just use the good stuff (router and static page generation).

## 2. Use Bun 
Gatsby's developer feedback loops are a little painful but Bun helps tremendously with this (as well as having an M1 MacBook to be honest). `Bun install` literally runs twice as fast for my frontend as `npm install`, and `Bun run dev` is 2 full seconds faster than `npm run dev`. It helps a lot. 

## 3. Use TypeScript
TypeScript feels like a no-brainer for apps. TypeScript definitely allowed me to build this app faster. It might force you to take a little bit more time figuring out how your data will be structured (a good thing), but it will save you time trying to remember how your data is structured later on. 

I just setup a `tsconfig.json` file and added type checking to my `dev` command. I've never seen this approach for setting up TypeScript in the wild before but it's very easy to setup and avoids more plugins and dependencies. 

My tsconfig.json:
```json
{
	"compilerOptions": {
		"skipLibCheck": true,
		"allowImportingTsExtensions": true,
		"target": "esnext",
		"lib": ["dom", "esnext"],
		"jsx": "preserve",
		"module": "esnext",
		"moduleResolution": "node",
		"esModuleInterop": true,
		"forceConsistentCasingInFileNames": true,
		"noImplicitAny": true,
		"noEmit": true
	},
	"include": ["./src/**/*", "./gatsby-node.ts", "./gatsby-config.ts", "./plugins/**/*"]
}
```

My `package.json` scripts:

```json 
"scripts": {
	"dev": "tsc --noEmit && gatsby clean && gatsby develop",
	"start": "gatsby develop",
	"build": "gatsby build",
	"serve": "gatsby serve",
	"clean": "gatsby clean",
	"typecheck": "tsc --noEmit",
	"lint": "bunx eslint . --ext .ts,.tsx"
}
```


## 4. Keep state management light 
One of the reasons server side rendering is getting more popular is because it simplifies state management. Since Gatsby is a client side React framework we have to be thoughtful with state.

Redux is very powerful but I would avoid it if possible. In my experience Redux leads to chaotic hard-to-follow code and it splits up components into multiple files. I was able to use useState with prop drilling, React-Query, and browser storage (using AWS Amplify's Auth) instead of Redux and I'm really glad I did so. These choices massively simplified my app's code. 

## 5. Use TailwindCSS and good tooling 
TailwindCSS is great. It keeps your components in one file and lets you work way faster. I recommend setting up inline-fold and a custom keyboard shortcut to toggle collapsing the className attribute to improve readability (I use `cmd+M`). I might write a post about this in the future because I can't use Tailwind without this setup now.
  
