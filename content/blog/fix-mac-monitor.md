---
title: MacBook secondary monitor not waking from sleep solved 💻
short: How to fix a Mac's external monitor not waking up after sleep mode
date: 23 July 2022
slug: fix-mac-monitor
createdAt: 23 July 2022
img: blog-2.jpg


tags:
  - Hardware
  - Productivity
  - Code
---

# MacBook secondary monitor not waking from sleep solved 💻


I’ve had this issue where my MacBook’s external monitor hasn't been waking up after the laptop went to sleep. The fix that worked for me was to manually reset the refresh rate of the external monitor to the monitor's standard refresh rate (which is 60hz for my Phillips 243V, this was set to 75hz by default for some reason).

1. Go to System preferences → Displays → Display settings
2. Select the secondary monitor from the panel on the left
3. Play around with the refresh rates 

This worked on a 2020 M1 MacBook Pro running macOS Monterey. Hopefully this helps someone 🙂