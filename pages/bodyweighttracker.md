---

title: bodyweighttracker.com, AWS CDK, and ShadCN/UI thoughts

short: A boring bodyweight tracking app and some thoughts on cloud and frontend tooling

date: '2025-05-01'

slug: bodyweighttracker

createdAt: '2025-05-01'

img: blog-2.jpg

tags:

- Release

---
## bodyweighttracker.com, AWS CDK, and ShadCN/UI thoughts

I made a webapp for tracking my bodyweight at [bodyweighttracker.com](https://www.bodyweighttracker.com/). It's not  special or interesting in anyway except that it doesn't have ads or a bloated feature set.

This was my first time exploring AWS CDK and even though this was a small project it's just so clear to me that there's no reason to use AWS SAM or the Serverless Framework anymore. CDK is just a much nicer experience and I suspect the gap would be even bigger with a more complex project. 

I've also been really impressed with ShadCN/UI. I used it before with [urltodo](https://www.urltodo.com) and it was a no brainer for this project. ShadCN is the best approach to adding components to a codebase I've seen so far. 