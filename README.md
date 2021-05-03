# fast-classnames

[![npm package](https://nodei.co/npm/fast-classnames.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/fast-classnames)

> Fast join class names

[![NPM version](https://img.shields.io/npm/v/fast-classnames.svg?style=flat)](https://npmjs.org/package/fast-classnames)
[![NPM Downloads](https://img.shields.io/npm/dm/fast-classnames.svg?style=flat)](https://npmjs.org/package/fast-classnames)
[![](https://data.jsdelivr.com/v1/package/npm/fast-classnames/badge)](https://www.jsdelivr.com/package/npm/fast-classnames)

## Installation

### In a browser

```html
<script src="https://cdn.jsdelivr.net/npm/fast-classnames/umd.min.js"></script>
<!-- <script src="https://cdn.jsdelivr.net/npm/fast-classnames/iife.min.js"></script> -->
<script>
  // window.fastClassnames
  fastClassnames('foo', 'bar'); // => 'foo bar'
  fastClassnames('foo', { bar: true }); // => 'foo bar'
  fastClassnames({ 'foo-bar': true }); // => 'foo-bar'
  fastClassnames({ 'foo-bar': false }); // => ''
  fastClassnames({ foo: true }, { bar: true }); // => 'foo bar'
  fastClassnames({ foo: true, bar: true }); // => 'foo bar'

  // lots of arguments of various types
  fastClassnames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

  // other falsy values are just ignored
  fastClassnames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'
</script>

```

### Using npm

```bash
npm install fast-classnames --save
```

```javascript
var fastClassnames = require('classnames');
fastClassnames('foo', 'bar'); // => 'foo bar'
fastClassnames('foo', { bar: true }); // => 'foo bar'
fastClassnames({ 'foo-bar': true }); // => 'foo-bar'
fastClassnames({ 'foo-bar': false }); // => ''
fastClassnames({ foo: true }, { bar: true }); // => 'foo bar'
fastClassnames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
fastClassnames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

// other falsy values are just ignored
fastClassnames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'

```

## Benchmark
【classnames】 x 319,625 ops/sec ±18.60% (76 runs sampled)
【className】 x 520,426 ops/sec ±0.31% (92 runs sampled)
The fastest is 【className】
