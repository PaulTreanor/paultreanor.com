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

I made a demo for [a notes taking app that you can program like excel](https://notesworkshop.vercel.app/). It's very rough around the edges and not really usable on mobile, but I'm happy wiht how the proof of concept turned out. 

## How you use it
You right markdown in the left pane, and theres a live preview on the right, just like how you edit markdown in VSCode. There interesting part is that **you can write your own rules that are applied to the rendered markdown**. These rules are basically combinations of *conditions* that apply *effects* when met. 

So for example here's a rule a user could make: If a line contains the words "important", "urgent", or "ASAP" (*this is the condition*) then that line should be bold (*this is the effect*). 

The demo only has a handful of built in conditions and effects, but you can imagine a more fully featured version.

It's basically **a human readable DSL that's programmed via UI elements** like dropdowns and buttons. This feels way more accessible than something like excel which is basically just a programming language, but also more flexible than Notion. 

The only issue is I haven't been able to think of a use case that's compelling enough for me to build the idea out 🤔.