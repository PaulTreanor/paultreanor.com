---
title: Eventual Consistency in Side Projects
short: Give up on consistently working on your side projects.
date: '2026-09-20'
slug: eventual-consistency
createdAt: '2026-09-20'
img: blog-2.jpg


tags:
  - Essay
---

# Eventual Consistency in Side Projects

I have a lot of good memories with friends tied up in skribbl.io, Gartic Phone, GeoGuessr, and other little multiplayer browser games. It's really an excuse to spend time with people who aren't physically beside you, and do nothing important with them. I love these games, so I've been making one, very very slowly.

[MapGuesser](https://www.mapguesser.com/) has been an exercise of picking things up and putting them down again, over and over again, for 2 and a half years now. I work on it for a few hours a week for a month or so, maybe with the odd 3 hour Saturday morning burst, and then I put it down for 3 or 4 months. And it's very slowly shaping up into something I've been proud of. 

I think this is a lovely way to work on a side project (maybe not actual work projects!). It's been deployed in some form (single-player) since the first few months and it's been a multi-player demo I can share with friends for a year now. It's been fun to see it improve every 6 months. A nicer map, nicer game flows, seeing that anonymous strangers are playing it in far off places. 

I don't recommend biting off big side projects to start with, but if you're doing one, make sure it's something you'd be happy to work on for years (and make sure it doesn't take years to show people your progress).

[Simon Willison's side project advice](https://simonwillison.net/2022/Nov/26/productivity/) is load bearing for MapGuesser. Write the tests early, because the hardest part is setting them up, then just keep adding them with each new feature. MapGuesser has over 200 tests, but I never sat down just to write tests. AI makes writing tests easier, but make sure it's actually testing the important stuff (and make sure you delete the useless tests it will inevitably write). When you take months off, it helps to have confidence that you aren't breaking stuff you made before. 

A system for [tracking issues and features](https://github.com/PaulTreanor/MapGuesser/issues) has been really important for keeping progress moving. I recommend just putting everything in GitHub Issues and labelling them as "now", "next", or "later". Avoid anything overly aspirational like using Linear or a public roadmap you will ignore.  

The big benefit of the slow approach is that you give yourself a chance to finish it. Life happens and other things will take priority over your big sprawling project. In that case consistency just means not giving up on it completely. It might help to frame it as maintaining your projects, rather than developing it like a startup. Give yourself time to dwell and change your mind a lot.

So, could someone use GPT-6 and $800 to prompt MapGuesser in a weekend? Not quite, maybe something similar, but not MapGuesser. 

<br>
<hr>
<br>

## Some very brief advice on building browser games
- React is an underrated choice for games. 
- Rolling your own state machine is a superpower because when you are debugging a multiplayer game it helps to know *exactly* how events run. 
- Cloudflare and Durable Objects are great. 
- Be thoughtful about what you add to your game (games don't need a "landing page" or SEO sludge like Frequently Asked Questions. Your game probably doesn't need accounts). Remember why you're building it. 



