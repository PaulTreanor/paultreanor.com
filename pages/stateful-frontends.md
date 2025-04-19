---
title: Low effort durable state in personal apps
short: Ideas around making useful personal tools without complex architectures
date: '2025-04-19'
slug: stateful-frontends
createdAt: '2025-04-19'
img: blog-2.jpg


tags:
  - Note
---

# Low effort durable state in personal apps 

AI is making it really easy to make [personal apps](https://simonwillison.net/2024/Oct/21/claude-artifacts/) that solve our own problems but most of these AI tools can't quite provision backend services like databases yet. This makes it hard to build anything that's actually useful with them, but there's a few creative workarounds for giving client side only apps persistent state.

## Browser local storage
This one's obvious, just store your state in the browser for the next session. I used v0 to make a very simple [intermittent fasting countdown timer](https://personal-imf-app.vercel.app/) that uses your local storage to remember the time you want to start and end your eating window at.

## URL
You can get really creative with putting state in the URL. [urltodo.com](https://www.urltodo.com/#eyJ0YXNrcyI6W3siaWQiOiIxNzQ0OTI2NTQ3NzY4IiwidGV4dCI6IkEgdG9kbyBsaXN0IGFwcC4uLiIsImNvbXBsZXRlZCI6dHJ1ZX0seyJpZCI6IjE3NDQ5MjY4Mjk4NjYiLCJ0ZXh0IjoiSW50ZXJtaXR0ZW50IGZhc3RpbmcgYXBwIChhcHAuY29tL3N0YXJ0PTExMDAvZW5kPTE4MzApIiwiY29tcGxldGVkIjpmYWxzZX1dLCJ0aXRsZSI6IkFwcHMgdGhhdCBjb3VsZCBqdXN0IHVzZSBVUkxzIGZvciBzdGF0ZSJ9) stores an entire todo list in the URL so you can add tasks, copy the URL, and share them so someone else can see them. A nice side effect of this is that your app has a built in [API](https://urltodo.com/docs) via the URL.

## Keep your state somewhere else
I have a few ideas here: 
- Copy-paste it from your notes app into a text area. 
- Upload it with the file API (`<input type="file">`) then let your app display it. The [Ink & Switch Potluck demo](https://www.inkandswitch.com/potluck/demo/?openDocument=splitwise) lets users create a document in the app and then re-upload it. 
- Read it in from a resource in a public URL that can be edited from another application, like a GitHub Gist (you could even use JSON with this). For example, [a workout analyser that reads structured data from a note you update manually](https://www.pauls.garden/gainsreport/) (please excuse the vibecoding).
- Use [Google Sheets as a database](https://www.youtube.com/watch?v=K6Vcfm7TA5U)
- You could do something interesting with iFrames?

If you haven't gotten into the habit of getting Claude to write little tools for you then I highly recommend it. If you're building something small for personal use you don't always need a backend at all. If the stakes are low then you should lower your standards - it's the best way to ensure things actually get built. Even if you are something more serious, don't sleep on the simplest fastest ways to give your applications state. 
