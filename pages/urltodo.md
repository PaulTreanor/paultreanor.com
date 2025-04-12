---

title: 📋 urltodo

short: A todo list that encodes tasks in the URL 

date: '2025-04-12'

slug: draft-pr

createdAt: '2025-04-12'

img: blog-2.jpg

tags:

- Release

---

<div style="display: flex; align-items: center; gap: 10px;">
  <img src="/images/urltodo/urltodo-icon.svg" alt="urltodo icon" width="30" height="30" style="display: inline-block; vertical-align: middle;">
  <h1 style="margin: 0; display: inline-block; vertical-align: middle;">urltodo</h1>
</div>

I've been working on [urltodo.com](http://urltodo.com) in the evenings this Spring.  


<img  src="/images/urltodo/urltodo-screenshot.jpg"  alt="urltodo screenshot" style="max-width: 300px; margin-top: 15px; margin-bottom: 15px;">
  
It's the fastest way to create and share lists, just add your items and hit copy. The entire list is stored in the link itself meaning there's no servers or accounts, it loads instantly, and it even works offline (it's a PWA).  

I don't think I'm ever going to get tired of just [linking lists](https://www.urltodo.com/#eyJ0YXNrcyI6W3siaWQiOiIxNzQ0NDYyOTM4NjMxIiwidGV4dCI6ImFuIE9ic2lkaWFuIGV4dGVuc2lvbiBmb3Igbm90ZSBjcmVhdGUgYW5kIGVkaXQgZGF0ZXMiLCJjb21wbGV0ZWQiOnRydWV9LHsiaWQiOiIxNzQ0NDYzMTI2Njc0IiwidGV4dCI6ImEgcHJvbXB0IG9yZ2FuaXNlciBmb3IgQ2hhdEdQVCAobm90IGFzIHVzZWZ1bCBhcyBJIHRob3VnaHQgaXQgd291bGQgYmUhKSIsImNvbXBsZXRlZCI6dHJ1ZX0seyJpZCI6IjE3NDQ0NjMxMzk1MzQiLCJ0ZXh0IjoiYSBuaWNlIHJlYWRhYmxlIGJsb2cgc2l0ZSIsImNvbXBsZXRlZCI6dHJ1ZX0seyJpZCI6IjE3NDQ0NjMxNDQ2ODciLCJ0ZXh0IjoiYSBtdWx0aXBsYXllciBicm93c2VyIGJhc2VkIGdlb2dyYXBoeSBnYW1lICg1MCUgZG9uZSDwn4yXKSIsImNvbXBsZXRlZCI6ZmFsc2V9LHsiaWQiOiIxNzQ0NDYzMTU5MzU3IiwidGV4dCI6ImEgdG9kbyBsaXN0IGFwcCB3aGVyZSBhbGwgdGhlIHRhc2tzIGFyZSBlbmNvZGVkIGluIHRoZSBVUkwiLCJjb21wbGV0ZWQiOnRydWV9LHsiaWQiOiIxNzQ0NDYzMTYzNjg5IiwidGV4dCI6ImEgc2ltcGxlIGJvZHl3ZWlnaHQgdHJhY2tpbmcgYXBwIHRoYXQgZG9lc24ndCBzcHkgb24geW91IiwiY29tcGxldGVkIjpmYWxzZX0seyJpZCI6IjE3NDQ0NjMxNjc0MjQiLCJ0ZXh0IjoiYSBHb29nbGUgUGhvdG9zIGJhY2t1cCBzZXJ2aWNlIiwiY29tcGxldGVkIjpmYWxzZX0seyJpZCI6IjE3NDQ0NjM4Nzg4NDMiLCJ0ZXh0IjoiYSB0aW55IGNhbGVuZGFyIGJyb3dzZXIgZXh0IGZvciBvcGVuaW5nIEdDYWwgcXVpY2tseSIsImNvbXBsZXRlZCI6dHJ1ZX1dLCJ0aXRsZSI6IvCfjL8gUHJvamVjdCBpZGVhcyAoLi4udGhhdCBJJ2xsIHByb2JhYmx5IG5ldmVyIGZpbmlzaCkifQ==) in documents like this. 
  
Its also hackable. I have some examples JS and Python scripts that can read and write their own urltodo lists. You can [read the docs](https://www.urltodo.com/docs) to find out the details. 

There's some interesting possibilities with scripting here. For example, if you had a workout routine in Google Sheets, you could use Google Apps Script to generate a link to a list of exercises, which could be ticked off during each workout. You could then display that link in a cell for each day.

Interestingly ChatGPT is *really* good at generating long urltodo links from lists if you just give it a link to the docs (so it knows the encodings), but I might make an MCP server some time so AIs can really use it. 

I'm pretty pleased with myself for this one. I think I did the idea in my head justice. It was also great fun creating the icons and logo. 

If you want to checkout the code [here's the GitHub repo](https://github.com/PaulTreanor/urltodo). 


