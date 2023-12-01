---
title: Automatically running LLMs on startup on Mac
short: Setting up a local LLM on Mac so that it's always ready for your questions
date: '2023-12-01'
slug: llamafile
createdAt: '2023-12-01'
img: blog-2.jpg


tags:
  - Tutorial
---

# Automatically running LLMs on startup on Mac

[Llamafile](https://hacks.mozilla.org/2023/11/introducing-llamafile/) lets you run a local LLM as a single downloadable executable and chat with it on a localhost port. This gave me the idea to make this even more accessible by making the LLM always be running so I can bookmark the port and chat to it instantly at any time, like a backup ChatGPT.

It's fun experiment, and the LLM I'm running (Llava) is pretty impressive. On my M1 MacBook it is faster than ChatGPT (although not quite as smart with most tasks). Best of all it isn't that hard to setup.


1. **Download an LLM executable with Llamafile**

This is very simple and [Simon Willison's blog post](https://simonwillison.net/2023/Nov/29/llamafile/) has great instructions for this. You want to download the file, make it executable with `chmod`, and then run the file to make sure it works. 

2. **Install Xbar** 

Next up install [Xbar](https://xbarapp.com/). Xbar is a utility that lets you run launch agent scripts very easily on MacOS. Just download the `.dmg` and put it in your applications folder. 

3. **Create an Xbar plugin**


An Xbar plugin is just a shell script that's placed in a special directory. When Xbar launches (it should launch on startup) it will run these scripts. 

Go to the xbar plugins directory:

```bash
cd ~/Library/Application\ Support/xbar/plugins
```

Create a your file in this directory called `runLlava.1d.sh` and make the file executable. 

```bash
touch runLlava.1d.sh
chmod +x runLlava.1d.sh
```

Then add some bash code that just calls the llamafile executable you downloaded in step 1:

```bash
#!/bin/bash
nohup /Users/paultreanor/ai/llamaFile/llamafile-server-0.1-llava-v1.5-7b-q4 &
```

At this point you should test the script out. 

```bash
./runLlava.1d.sh

# Then go to localhost:8080 to see the UI
```

4. **Test it out** 

Restart your machine and launch Xbar. I have Xbar set so it runs when I turn my Mac on. 

Then bookmark localhost:8080 in your browser so you can access it whenever you want, just like ChatGPT.

<img  src="/images/llamafile/bookmark.png" alt="llamafile web UI and bookmark">




