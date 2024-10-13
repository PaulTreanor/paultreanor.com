---

title: A note-taking app that you can program like Excel...

short: A demo of a note-taking app that you can program like Excel

date: '2024-10-11'

slug: notesworkshop

createdAt: '2024-10-11'

img: blog-2.jpg

  
  

tags:

- Note

---

# A note-taking app that you can program like Excel...

A few weeks ago I gave a talk called ""Power Tools for Digital DIYers" at a BelfastJS meetup. I didn't post it anywhere because I don't have a great recording of it, but I as part of the talk I made a cool demo, so I figured I'd share it here.

**[So here it is!](https://notesworkshop.vercel.app/)** - it's very rough around the edges and not really usable on mobile, but it works as a proof of concept: It's a note-taking app that you can program like Excel.

## How you use it
It's a markdown editor with an editing pane on the left and a live preview on the right, similar to how you edit markdown in VSCode.
The interesting part it that **you can write your own rules that are applied to the rendered markdown**. Rules apply effects to the text when the user's conditions are met. 

So for example a user could make the following rule: If a line contains the words "important", "urgent", or "ASAP" (*this is the condition*) then that line should be bold (*this is the effect*). The demo only has a handful of built in conditions and effects, but you can imagine a more fully featured version.

It's basically **a human readable DSL that's programmed via UI elements** like dropdowns and buttons. This feels way more accessible than something like excel which is basically just a programming language, but also more flexible than Notion. 

The only issue is I haven't been able to think of a use case that's compelling enough for me to build the idea out 🤔.