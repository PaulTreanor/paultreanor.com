---
title: Adding custom electron app icons on Mac with electron-build
short: A guide to adding personalized icons to electron apps on Mac
date: 2 February 2023
slug: electron-custom-icon
createdAt: 2 February 2023
img: blog-2.jpg


tags:
  - Code
---

### Setting up an Electron app using React and electron-build 
- You can set up a simple Electron app that uses electron-build by following [this blog post](https://blog.devgenius.io/how-to-build-and-publish-an-electron-app-with-react-tutorial-971e1d9d27ce). 
- Remove the Windows build code from `package.json`. Your `package` and `publish` scripts should look like this:

```json 
"scripts": {
	"package": "electron-builder build --mac -c.extraMetadata.main=build/electron.js --publish never",
	"publish": "electron-builder build --mac --publish always"
},
```

- Remove the `win` key from the `build` section of `package.json`
- Add `/dist` to your `.gitingore file` 

### Building and packaging the app
Launch the electron app by running the following commands:
```bash
npm run build
npm run package
```
This will output an application as a `.dmg` file in the project's `/dist` directory. Double click the file to launch the app.

<img src="/electron-1.png" alt="App in file explorer">

Notice that the app is currently using the default electron icon. 
<img src="/electron-2.png" alt="App with default icon">
### Creating a suitable icon 
MacOS requires icons to be 512x512px and in the `.icns` format. You can convert other image formats to `.icns` using [cloudconvert](https://cloudconvert.com/png-to-icns).

### Adding a custom icon
Create a directory called `resources` and place your icon into it. Then add the following configuration the `build` key of the your `package.json`.

```json 
"directories": {
	"buildResources": "resources",
	"output": "dist"
},
```


Now if you build and package the application again, it should include your custom icon. 

<img src="/electron-3.png" alt="App with new icon">

The code for this complete demo is in [this GitHub repository.](https://github.com/PaulTreanor/electron-build-icon-demo)