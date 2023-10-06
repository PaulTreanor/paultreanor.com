---
title: CodeSpaces - Beyond Local Dev
short: Some thoughts on GitHub CodeSpaces and Cloud IDEs
date: '2023-10-05'
slug: codespaces
createdAt: '2023-10-05'
img: blog-2.jpg


tags:
  - Code
  - Environment
  - Productivity
  - Talk 

---

# CodeSpaces - Beyond local dev

*This blog post is based on a talk I gave at a recent BelfastJS meetup (which was great fun!). Since the talk wasn't recorded, I compiled the slides and some notes into a blog post.*


---------------------

<br />

<img src="/images/codespaces/1.jpg" alt="Slide 1">
<br />
<img src="/images/codespaces/2.jpg" alt="Slide 2">


GitHub CodeSpaces is a cloud IDE that allows you to write and run code on a server via your browser, as opposed to the traditional local dev environment approach where you write code on your computer. 

#### Dev Environments
<img src="/images/codespaces/3.jpg" alt="Slide 3">

Good DevOps practices advocate treating servers like cattle, not pets - meaning they should be replaceable, interchangeable, and automated instead of being unique.  This means a server failing isn't a big deal as it can be quickly replaced. **We should extend this approach to our environments, and start treating them like easy to replace cattle rather than indispensable pets.** 

Maintaining dev environments is hard because of the discrepancy between local dev environments and our production deployment environment. This causes bugs and wastes time, ideally we would simply delete our broken environment when needed, and then create a fresh one with everything working out of the box. This isn't practical with laptop-based dev environments.

<img src="/images/codespaces/4.jpg" alt="Slide 4">

As dev environments get more dependencies, more tooling, and more abstractions, there is more opportunity for small bugs to creep up. This means it is becoming more important to find a way to make our development environments easily replaced commodities to reduce time fixing annoying environment bugs, and spend more time writing useful code. 



#### Reasons to use a Cloud IDE
<img src="/images/codespaces/5.jpg" alt="Slide 5">

I think there is four areas where using a Cloud IDE really shines:
1. Remote work
2. Security
3. DevOps
4. Developer Experience

#### Remote Work 
<img src="/images/codespaces/6.jpg" alt="Slide 6">
<br />

<img src="/images/codespaces/7.jpg" alt="Slide 7">

Cloud IDEs are ideal for remote and hybrid work as all you need is a web browser to have access to a complete IDE. No more issues like forgetting your laptop, and hardware constraints are much less of a concern when working with large apps, as provisioning a more powerful CodeSpace is trivial. 

Onboarding is also easier, especially for larger teams. Junior employees can have a ready-to-use environment in seconds, avoiding the usual hassle of figuring out how to get things running on their machine. With the ability to live-share ports, developers can troubleshoot the exact same environment together with no setup time from different locations. 

#### Security
<img src="/images/codespaces/8.jpg" alt="Slide 8">
<br />

<img src="/images/codespaces/9.jpg" alt="Slide 9">

CodeSpaces are essentially a container, which means **you have complete transparency into what is installed and running** when your environment is first set up. Everything is configured, accounted for, and version controlled as a dockerfile or a devcontainer.json file. Compared to a CodeSpace, my MacBook acts like a black box. 

<img src="/images/codespaces/10.jpg" alt="Slide 10">

**CodeSpaces are designed to be ephemeral**, and they only run as long as a task, sprint, or git branch runs. This is a security upgrade because they mitigate long-term vulnerabilities. CodeSpaces always start fresh and are always up to date - in comparison I haven't factory reset my laptop since I got it. 

<img src="/images/codespaces/11.jpg" alt="Slide 11">

Working natively with HTTPS is another advantage, especially for a less mature development team. Traditional web development on localhost often leads to unexpected CORS errors post-deployment. CodeSpaces uses port forwarding instead of localhost, which means you have to reckon with HTTPS and CORS early in the development cycle. By bringing development and production environments closer together like this, unexpected production issues can be prevented. 

#### DevOps

<img src="/images/codespaces/12.jpg" alt="Slide 12">
<br />
<img src="/images/codespaces/13.jpg" alt="Slide 13">


CodeSpaces embodies several DevOps principles to make teams be more productive. Defining the environment as code brings many of the same benefits as defining infrastructure as code. CodeSpaces also promotes "self-service" by empowering devs to manage their own environments without relying on a separate infrastructure team. This flexibility to quickly create or tear down environments allows for more motivated developers. 

While providing expensive hardware and bespoke environments to developers feels beneficial, commoditising environments will lead to a less fragile development workflow in the long run. 


#### Developer Experience 

<img src="/images/codespaces/14.jpg" alt="Slide 14">

<br />
<img src="/images/codespaces/15.jpg" alt="Slide 15">


The benefits of Cloud IDEs only matter if they are nice to write code in. In the past I've found some Cloud IDE offerings to feel a little bit like toys, but CodeSpaces is genuinely excellent and it's actually more convenient than using your local development environment in a lot of ways. 

<img src="/images/codespaces/16.jpg" alt="Slide 16">

<br />
<img src="/images/codespaces/17.jpg" alt="Slide 17">

The default CodeSpaces environment *is* VSCode, complete with all your extensions, keyboard shortcuts, and settings (if you enable sync). GitHub has been writing and maintaining their own codebase with CodeSpaces for years now so the rough edges have been ironed out. CodeSpaces is genuinely a place that you can spend entire work days writing code in. 

<img src="/images/codespaces/18.jpg" alt="Slide 18	">


CodeSpaces has a few developer experience advantages over local machines:
1. Handling multiple git branches at once is trivial - you can open as many as you'd like in a new tab each. This is very useful sometimes and very hard to replicate locally. 
2. You don't have to navigate your filesystem or manage duplicate out-of-sync repo clones anymore. Everything can be found and accessed from GitHub (which you're probably using anyways), so you don't have to act like a librarian anymore. This simplifies context switching and is especially useful if you're only making a small changes to a project. 

#### Examples of issues you avoid with CodeSpaces
<img src="/images/codespaces/21.jpg" alt="Slide 21 - Port conflict">
<br />
<img src="/images/codespaces/22.jpg" alt="Slide 22 - Node version issue">
<br />
<img src="/images/codespaces/23.jpg" alt="Slide 23 - Permission denied error">


These errors might seem like easy fixes, but for developers new to an ecosystem they are easy to cause and can be really annoying to track down. I've encountered these errors many times, but they just don't occur in a Cloud IDE. 

#### Issues with CodeSpaces
There's still a few issues with using CodeSpaces in your workflows:

<img src="/images/codespaces/24.jpg" alt="Slide 24">

1. Speed: It's definitely useable but for environments to be truly commoditised I'd like cold starts to be less than 10 seconds (currently ~30-80 seconds).

<img src="/images/codespaces/25.jpg" alt="Slide 25">


2. Config: It adds yet another config file, a small annoyance to be fair

3. Security: Public port sharing during development is a bit of a security issue with microservices architectures. I'm still figuring this out. 

#### Takeaways and who can benefit the most from Cloud IDEs
My main takeaways from the talk are:

1. **Commoditise your environments**: I like CodeSpaces, but more generally figuring out how to define your environment by code is really valuable
2. **Try out CodeSpaces:** It's incredibly convenient for demoing stuff, testing libraries, and making small changes to projects. 
3. **CodeSpaces will help "overlooked devs" the most**: What I mean by this is that developers who work with difficult older environments (Windows 7, old laptops, remote desktop, lots of VMs) will benefit the most from CodeSpaces. These developers do exist even in 2023, and Cloud IDEs have the potential to democratise good coding environments for everyone, not just for the trendy JavaScript devs.

<img src="/images/codespaces/27.jpg" alt="Slide 27">

### Questions I got at my talk 
**Q: Doesn't this mean you can't work offline**
GitHub, ChatGPT, Google, and StackOverflow don't work offline either. Honestly if you don't have an internet connection it's very hard to get meaningful software development done anyways. 

**Q: Can you run docker within a CodeSpace?**
I haven't needed to do this yet but I Googled it and apparently you can without any issues. 

