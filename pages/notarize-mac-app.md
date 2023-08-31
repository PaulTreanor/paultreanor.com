---
title: Notarizing Electron Apps for MacOS
short: Guide to notarizing electron apps for MacOS
date: '2023-08-29'
slug: notarize
createdAt: '2023-08-29'
img: blog-2.jpg


tags:
  - Code
---


# Notarizing Electron Apps for MacOS
Notarizing is an automated process by Apple that ensures your application is safe and compatible with MacOS. It involves sending a copy of your app to Apple's system, and then waiting for a response to hopefully say all is good. 

All MacOS apps must be code-signed and notarized or else users won't be able to install them. 

### Prerequisites
Before you can notarize your app, you need to join the Apple Developer Program which costs €100/year (a not-so-nice gatekeeping measure from Apple). Then you'll need to set up some Apple Developer Program certificates in your Keychain. [This RocketRide blog post](https://www.rocketride.io/blog/macos-code-sign-notarize-electron-app) is a helpful guide through this painful process.

Mercifully these steps are a one-time ordeal for your first MacOS app. For subsequent apps, [electron-builder should handle code-signing](https://www.electron.build/code-signing.html) as part of its build process so long as your Keychain credentials are set up correctly.

### Notarizing
The [Electron Notarize](https://github.com/electron/notarize) npm module is helpful here. To use the module create the files *notarize.js* and *.env*. **You must add *.env* to your `.gitignore` file** as it contains secrets that you don't want to commit to your GitHub repo.

**notarize.js**
```js
const { notarize } = require('@electron/notarize');
require('dotenv').config();

async function packageTask () {
	const options = {
		appBundleId: 'your.bundle.name', // Unique ID in form `com.paultreanor.promptmarker`
		appPath: './path/to/yourAppName.dmg', // Probably in `/release` or `/dist`
		appleId: process.env.APPLE_ID, // Should be an email
		appleIdPassword: process.env.APPLE_ID_PASSWORD, // Read electron/notarize README doc (app specific password)
		teamId: process.env.TEAM_ID
	};
	// Log your options to make sure everything looks OK - be careful as this will print your secrets
	console.log({options})
	try {
		await notarize(options);
		console.log("Notarization complete")
		} catch (error) {
		console.error("Error during notarization: ", error);
	}
}

packageTask();
```


**.env**
```text
APPLE_ID=myappleid@gmail.com
APPLE_ID_PASSWORD=xxxx-xxxx-xxxx-xxxx
TEAM_ID=XXXXXXXXXX 
```

You'll need to follow [these instructions](https://support.apple.com/en-us/HT204397) to create an app specific password. Just write in the name of your app and you'll get a 16 digit password for it. 

Fill in the `options` arguments and then run the script after running your build process:

```bash
npm run build
node notarize.js
```

This can take a few minutes to run and you'll either get an error message from Apple or it will run successfully. 

### Verification and Stapling
You can check that your file is notarized correctly by running the following:

```bash
spctl -a -t exec -vv YourApp.dmg
```


You can staple the notarization ticket directly to your `dmg` file so it can be verified by Apple even if the user installs it offline:

```bash
xcrun stapler staple "YourApp.dmg"
```

These commands also work with `.app` files if you'd rather distribute those instead. 

And there you have it, now you can distribute your app for people to download and install it 👏