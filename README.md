# 📝 preview
A simple browser-based Markdown editor. Published under the [MIT License](https://github.com/yasinS/preview/blob/master/LICENSE) as an experimental project, which I use personally for day-to-day text review.

## Using the editor
## Online version
* Try the latest build in your browser at **[Add-URL]()**.
* You can also add the editor to your shelf on Chrome OS devices as a windowed app.

## 💻 Running locally
This project uses [NPM](https://www.npmjs.com/) and Gulp for build management. Before proceeding, check that you have installed [Node](https://nodejs.org/en/download/package-manager) on your system.

1. Clone this repository to a location of your choice
2. `cd` into the repository, then run `npm install`
3. Finally, start the local server with `npm start`

You can stop the local `live-server` instance by executing `npm stop` from the package directory.

<img src="readme.png" width="40%">

## 📓 Features
* Live preview powered by [Showdown](https://github.com/showdownjs/showdown) 
* Restrictive HTML sanitisation from [DOMPurify](https://github.com/cure53/DOMpurify)
* Offline-capable with save, load, and print using local browser functions
* Night mode (via toggle button or `?night=1` URL parameter)
* Word count using Sacha Schmid's [Countable](https://github.com/RadLikeWhoa/Countable)
* Basic markdown [table](https://www.npmjs.com/package/showdown-table) support
