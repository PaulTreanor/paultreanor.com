---

title: Easily downloading and running old Chrome versions

short: A simple way to launch downgraded browser versions. 

date: '2025-03-24'

slug: draft-pr

createdAt: '2025-03-24'

img: blog-2.jpg

tags:

- Tutorial

---

## You can download and run old Chrome versions easily with Puppeteer 

There's a lot of nonesense online about testing old Chrome versions with VMs or downloads from sketchy websites, but it's actually very easy to do this with pupeteer. 

Here's how to test Chrome version 134.0.6998.89: 

```bash
# Install 
npm install @pupeteer/browser

# Install the browser version
npx @puppeteer/browsers install chrome@134.0.6998.89

# Launch the version
npx @puppeteer/browsers launch chrome@134.0.6998.89

```

This can be very useful for debugging frontend problems. The Chrome window will remain open until you terminate the process (`cmd + c`). 
