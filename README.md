# 📝 preview
A simple browser-based Markdown editor. Published under the [MIT License](https://github.com/yasinS/preview/blob/master/LICENSE) as an experimental project, which I use personally for day-to-day text review.

## Using the editor
### 🌐 Online version
* Try the latest release build in your browser at **[Add-URL]()**.
* You can also add the editor to your shelf on Chrome OS devices as a windowed app.

### 💻 Running locally
This project uses [NPM](https://www.npmjs.com/) and Gulp for build management. Before proceeding, check that you have installed [Node](https://nodejs.org/en/download/package-manager) on your system.

1. Clone this repository and `cd` into the `preview` directory
2. Run `npm install` to build and streamline the packages
3. Serve with `npm start` and browse to `http://<server>:8081`

_You can stop the `live-server` instance by executing `npm stop` from the `preview` directory._

<img src="readme.png" width="40%">

## 📓 Features
* Live preview powered by [Showdown](https://github.com/showdownjs/showdown) 
* Restrictive HTML sanitisation from [DOMPurify](https://github.com/cure53/DOMpurify)
* Offline-capable with save, load, and print using local browser functions
* Night mode (via toggle button or `?night=1` URL parameter)
* Word count using Sacha Schmid's [Countable](https://github.com/RadLikeWhoa/Countable)
* Basic markdown [table](https://www.npmjs.com/package/showdown-table) support
