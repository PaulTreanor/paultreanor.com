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

I did a talk at a BelfastJS meetup a while back called "Power Tools for Digital DIYers". I didn't post it anywhere because I don't have a great recording of it, but I did make a cool demo for the talk, so I might as well share it. 

[Here it is!](https://notesworkshop.vercel.app/) - this is very much a desktop only demo, it won't work on mobile. It's a note-taking app that you can programming like Excel. I called it NotesWorkShop. **It's very very rough around the edges** but I am very proud of the idea
## How do you use it. 
It's a markdown editor with an editing pane on the left and a live preview on the right, similar to how you edit markdown in VSCode.
The interesting part it that **you can write your own rules that are applied to the rendered markdown**. 

Users can create conditional rules that apply effects to the rendered markdown. 

So for example a user could make the following rule: If a line contains the words "important", "urgent", or "ASAP" (*this is the condition*) then that line should be bold (*this is the effect*). 

The demo is simple but I think it has enough options for conditions and effects to get the idea across.

It's basically **a human readable DSL that's programmed via UI elements** like dropdowns and buttons. This feels way more accessible than end user programming tools like Excel or AutoHotKey which are basically just programming languages. 

The only issue is I haven't been able to think of a use case that's compelling enough for me to build the idea out 🤔.