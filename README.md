<h1 align="center">Geometry</h1>
<h4 align="center">Geometry assembler for renderium</h4>
<p align="center">
  <a href="https://www.npmjs.com/package/@renderium/geometry" target="_blank">
    <img src="https://img.shields.io/npm/v/@renderium/geometry.svg" alt="NPM version" target="_blank"></img>
  </a>
  <a href="https://github.com/feross/standard" target="_blank">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat" alt="js-standard-style"/>
  </a>
</p>

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Development](#development)

## Install

```
npm install --save @renderium/geometry
```

or download [dev](https://unpkg.com/@renderium/geometry/dist/geometry.umd.js) or [prod](https://unpkg.com/@renderium/geometry/dist/geometry.min.js) version

## Usage

```js
var geometry = new Geometry(0xff)
```

## Development

Command | Description
------- | -----------
`npm run check` | Check standard code style by [snazzy](https://www.npmjs.com/package/snazzy)
`npm run build` | Wrap source code in [UMD](https://github.com/umdjs/umd) by [rollup](http://rollupjs.org/)
`npm run min` | Minify code by [UglifyJS2](https://github.com/mishoo/UglifyJS2)
