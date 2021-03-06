# 📝 preview
A simple browser-based Markdown editor. Published under the [MIT License](https://github.com/yasinS/preview/blob/master/LICENSE) as an experimental project.

<center>
<a href="https://travis-ci.org/yasinS/preview"><img src="https://travis-ci.org/yasinS/preview.svg?branch=master"></a>
</center>

## Using the editor
### 🌐 Online version
* Try the latest release build in your browser at **[https://yasins.github.io/preview-live/](https://yasins.github.io/preview-live/)**.
* You can also add the editor to your shelf on Chrome OS devices.

### 💻 Running locally
This project uses [NPM](https://www.npmjs.com/) and Gulp for build management. Before proceeding, please check that you have installed [Node](https://nodejs.org/en/download/package-manager) on your system.

1. Clone this repository and `cd` into the `preview` directory
2. Run `npm install` to build and streamline the dependencies
3. Serve with `npm start` and browse to `http://127.0.0.1:8081` (stop with `npm stop`)

_Using the in-built web server is optional. After `npm install` has finished, you can serve or open the `web` directory in a manner of your choice_.

<img src="readme.png" width="40%">

## 📓 Features
* Enhanced feature set and live preview powered by [Remarkable](https://github.com/jonschlinkert/remarkable), plus: 
  * GitHub Flavoured tables and formatting options
  * Text footnoting
* Autosave to Local Storage in your browser – nothing remote nor collected externally
* Offline-capable with save, load, and print using local browser functions
* Restrictive input sanitisation from [DOMPurify](https://github.com/cure53/DOMpurify)
* Night mode (via toggle button or `?night=1` URL parameter)
* Inbuilt word and character count
