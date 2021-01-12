<%_ name_prefix = name[0] === '@' ? name.slice(1).split('/')[0] : name.split('/')[0] _%>
<%_ name_suffix = name[0] === '@' ? name.slice(1).split('/').pop() : name.split('/').pop() _%>
<%_ name_ucamel = _.upperFirst(_.camelCase(name_suffix)) _%>
[![NPM version](https://badge.fury.io/js/<%= encodeURIComponent(name) %>.svg)](https://npmjs.org/package/<%= name %>)
[![Build Status](https://travis-ci.com/<%= name[0] === '@' ? name.slice(1) : name %>.svg?branch=master)](https://travis-ci.com/<%= name[0] === '@' ? name.slice(1) : name %>)
[![Coverage Status](https://coveralls.io/repos/github/<%= name[0] === '@' ? name.slice(1) : name %>/badge.svg?branch=master)](https://coveralls.io/github/<%= name[0] === '@' ? name.slice(1) : name %>?branch=master)

# <%= name %>

A [web component] module: it can be integrated into a project either via [webpack] or a `<script>` tag; see the examples below.

## Usage

### Installation

```sh
npm install <%= name %> --save
```

### Import

```javascript
import { <%= name_ucamel %> } from '<%= name %>';
```

### Example Integration via Webpack

**index.html**:
```html
<body>
  <<%= name_suffix %> class="<%= name_suffix %>"></<%= name_suffix %>>
</body>
```

**style.scss**:
```scss
.<%= name_suffix %> {
  // *optional* customization
}
```

**index.coffee**:
```coffeescript
<%= _.snakeCase(name_suffix) %> = document.querySelector('<%= name_suffix %>')
```
```javascript
<%= _.snakeCase(name_suffix) %>.show() ## or: <%= _.snakeCase(name_suffix) %>.dispatchEvent(new Event('show'))
<%= _.snakeCase(name_suffix) %>.hide() ## or: <%= _.snakeCase(name_suffix) %>.dispatchEvent(new Event('hide'))
```

**webpack.config.js**:
```javascript
module.exports = {
    entry: { main: [
        '@babel/polyfill', '<%= name %>', './src/index.js'
    ]}, ..
}
```

..where including the `<%= name %>` entry takes care of _both_ the component's script _and_ default stylesheets.

### Example Integration via a `<script>` Tag

**index.html**:
```html
<head>
  <script src="./lib/<%= name_suffix %>/dist/lib/index.min.js"></script>
</head>
<body>
  <<%= name_suffix %> class="<%= name_suffix %>"></<%= name_suffix %>>
</body>
```

..where sourcing the `index.min.js` file takes care of again _both_ the component's script _and_ default stylesheets. There is _no_ need to explicity use a `<link href="./lib/<%= name_suffix %>/dist/lib/styles/styles.css">` tag!

> Note, that `./lib/<%= name_suffix %>` needs to be provided accordingly: This can for example be ensured by creating a symbolic link to `./node_modules/<%= name %>` (or by simply copying the latter to the `./lib` folder):

```sh
ln -s ./node_modules/<%= name %> ./lib/<%= name_suffix %>
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

#### initially (if public):

```sh
npm publish --access=public
```

## Copyright

 © <%= year %> [<%= author.name %>](<%= author.url %>)

[web component]: https://developer.mozilla.org/en-US/docs/Web/Web_Components
[webpack]: https://webpack.js.org
