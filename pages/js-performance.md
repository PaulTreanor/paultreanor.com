---
title: Low-Hanging Fruits of JS build and test times
short: Simple ways to speed up Jest tests and webpack builds
date: '2025-02-19'
slug: js-build-times
createdAt: '2025-02-19'
img: blog-2.jpg


tags:
  - Note
---

# Low-Hanging Fruits of JS build and test times

### Speeding up Jest test suite 
The InsightAppSec frontend has about 50k unit tests written in Jest. Depending on whether or not your laptop's plugged in, they take in or around 6 minutes to run. I recently spent an afternoon doing some benchmarking to try and make them run faster. 
  
Using Node 20 instead of Node 18 made the test suite run 35% faster (5m31s to 3m21s), which is a really nice improvement. 

Running tests selectively based on git changes (`jest --onlyChanged`) has no downsides for regular inner-loop software development (all the tests will still be run on the CI pipeline). But this small change brought the average run time down to about a minute, depending on how many files I've changed.

### Speeding up webpack local dev server 
Configuring webpack to use caching when running a local dev server took `npm run dev` from taking 1 minute 40 seconds to run, to taking 12 seconds to run. It works by effectively making `npm run dev` use HMR from cold. 

### Leverage existing boring tools
I couldn't believe how much faster these really simple changes made the build and test times. Moving the test suite from Jest to Vitest would probably have taken me a month, and the same goes for swapping webpack with RSpack or Vite (we use a good few plugins). 

In the future I'm going to be a bit more wary about big build/test tool migrations for performance reasons because there's still a lot of low-hanging fruit with these slightly older tools. It is well worth doing a bit of profiling before doing a costly tooling migration. 

In the meantime I'm enjoying the speedups. I get an hour or so back every week and running tests doesn't take me out of that nice flow state quite like it used to. 
