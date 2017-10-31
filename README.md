# atinterface

> Attention Trigger Web Interface

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## General Vue-Webpack-Structure

All source files are located in the `src/`-folder.
The compiled files are saved into the `dist/`-folder. This folder needs to be deployed for production.
The `build/`- and `config/`-folders contain configurations for the different utilities.

## SRC-Folder-Structure

The `src/`-folder has only two top-level files: 

`main.js`: This is the entry-point for webpack. In this file Vue and the router are initialized and the `App.vue`-file is registered as the top-level-component.

`App.vue`: This is the top-level-component of the webapp. It is not supposed to contain any HTML-code. Instead the webapp should be composed of sub-components, that are imported and registered into this top-level-component. The pages of a SinglePageApplication should be imported and registered in the router (see below). The router-view can then be referenced in this file with `<router-view/>`.

There are 3 folders:

`router/`: This folder contains one index.js-file, which handles all the router-logic. Components, that should be loaded and unloaded according to the url-route (e.g. pages in a SinglePageApplication) are imported and registered as components in this file. #

`components/`: This folder contains all SingleFileComponents-files.

`assets/`: This folder contains all static assets such as images.