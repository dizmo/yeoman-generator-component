[![NPM version](https://badge.fury.io/js/%40dizmo%2Fgenerator-component.svg)](https://npmjs.org/package/@dizmo/generator-component)
[![Build Status](https://travis-ci.com/dizmo/yeoman-generator-component.svg?branch=master)](https://travis-ci.com/dizmo/yeoman-generator-component)

# @dizmo/generator-component

> A generator for JavaScript, CoffeeScript anbd TypeScript [web components]

## Prerequisites

* [Node.js] v14.15.3 LTS (or higher); for Linux distribution based packages (`deb` or `rpm`) see also [binary distributions](https://github.com/nodesource/distributions).

## Installation

```sh
npm install -g yo
```

```sh
npm install -g @dizmo/generator-component
```

## Help

```sh
yo @dizmo/component --help
```

## Generation

```sh
yo @dizmo/component [--git]
```

## Upgrade

```sh
yo @dizmo/component --upgrade
```

## Development

### Clean

```sh
npm run clean
```

### Build

```sh
npm run build
```

#### without linting and cleaning:

```sh
npm run -- build --no-lint --no-clean
```

#### with UMD bundling (incl. minimization):

```sh
npm run -- build --prepack
```

#### with UMD bundling (excl. minimization):

```sh
npm run -- build --prepack --no-minify
```

### Lint

```sh
npm run lint
```

#### with auto-fixing:

```sh
npm run -- lint --fix
```

### Test

```sh
npm run test
```

#### without linting, cleaning and (re-)building:

```sh
npm run -- test --no-lint --no-clean --no-build
```

### Cover

```sh
npm run cover
```

#### without linting, cleaning and (re-)building:

```sh
npm run -- cover --no-lint --no-clean --no-build
```

## Documentation

```sh
npm run docs
```

## Publication

```sh
npm publish
```

#### initially (if `public`):

```sh
npm publish --access=public
```

## Copyright

 © [dizmo AG](http://dizmo.com/), Switzerland

[Node.js]: https://nodejs.org
[web components]: https://developer.mozilla.org/en-US/docs/Web/Web_Components
