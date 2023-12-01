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


  

[Llamafile](https://hacks.mozilla.org/2023/11/introducing-llamafile/) lets you run a local LLM as an executable file that launches a chat UI on a localhost port. This gave me the idea to keep the LLM always running in the background, so I can bookmark the port in my browser and ask it questions with the click of a button. 

Overall the model I'm running (Llava) is pretty impressive and it's very fast on my M1 MacBook. The model is great for generating names (better that GPT-4 imo) and very good at explaining technical topcs, but it's programming skills need some work. 

Here's the steps make using a local LLM really convenient on MacOS. 

1. **Download an LLM executable with Llamafile**

  [Simon Willison's blog post](https://simonwillison.net/2023/Nov/29/llamafile/) has great instructions for this (his blog is always fantastic btw), but here's a quick summary:

```bash
# Download the file
curl -LO https://huggingface.co/jartine/llava-v1.5-7B-GGUF/resolve/main/llava-v1.5-7b-q4-server.llamafile

# Make it executable
chmod 755 llava-v1.5-7b-q4-server.llamafile

# Run the file
./llava-v1.5-7b-q4-server.llamafile

# Go to http://127.0.0.1:8080/ to play around with the model. 
```

  

2. **Install Xbar**
We're going to use a utility called [Xbar](https://xbarapp.com/) to run Llamafile in the background at startup. Just download the Xbar `.dmg` and put it in your applications folder.

  
3. **Create an Xbar plugin**

An Xbar plugin is just a shell script that's placed in a special directory. When Xbar launches it will run these scripts.

Go to the xbar plugins directory:

  

```bash
# Go to the xbar plugins directory
cd ~/Library/Application\ Support/xbar/plugins

# Create a bash file called runLlava.1d.sh
touch runLlava.1d.sh

# Make the file executable
chmod +x runLlava.1d.sh
```

Now we can add some code to runLlava.1d.sh that calls the llamafile executable you downloaded in step 1:

```bash
#!/bin/bash
nohup /Users/paultreanor/ai/llamaFile/llamafile-server-0.1-llava-v1.5-7b-q4 &
```


At this point you should test the runllava.1d.sh out. 

  

```bash

./runLlava.1d.sh

# Go to http://127.0.0.1:8080/ to make sure it's working
```

  

4. **Bringing it all together**
[Set xbar to run on startup](https://www.idownloadblog.com/2015/03/24/apps-launch-system-startup-mac/) and then restart you machine. 

Then bookmark localhost:8080 in your browser so you can access it quickly. The model will always be waiting to answer you questions, just like ChatGPT (without the downtime).

\
&nbsp;

<img src="/images/llamafile/bookmark.png" alt="llamafile web UI and bookmark">