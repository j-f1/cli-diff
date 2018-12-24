# cli-diff

[![cli-diff on npm](https://img.shields.io/npm/v/cli-diff.svg?style=flat-square)](https://yarnpkg.com/package/cli-diff)
[![MIT Licensed](https://img.shields.io/github/license/j-f1/cli-diff.svg?style=flat-square)](https://github.com/j-f1/cli-diff/blob/master/LICENSE)
[![Supported Node versions](https://img.shields.io/node/v/cli-diff.svg?style=flat-square)](https://npmjs.com/package/cli-diff)
[![Build status](https://img.shields.io/travis/com/j-f1/cli-diff/master.svg?style=flat-square)](https://travis-ci.com/j-f1/cli-diff)
[![Coverage via Codecov](https://img.shields.io/codecov/c/github/j-f1/cli-diff/master.svg?style=flat-square)](https://codecov.io/gh/j-f1/cli-diff)
![types: TypeScript](https://img.shields.io/npm/types/cli-diff.svg?style=flat-square)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> A diff utility with highlighted output for CLIs

`cli-diff` makes it easy for your CLI or script to output a highlighted diff.
It doesn’t support syntax highlighting in the diff right now,
but it does support highlighting line-by-line.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Contribute](#contribute)
- [License](#license)

## Install

```shellsession
$ yarn add cli-diff
$ # or npm:
$ npm install cli-diff
```

## Usage

```ts
import diff from 'cli-diff'
// or, if you prefer:
const diff = require('cli-diff').default

console.log(diff('hello', 'goodbye'))
/* output:
@@ -1,1 +1,1 @@
-hello
\ No newline at end of file
+goodbye
*/

console.log(
  diff(
    { name: 'old.txt', content: 'hello\nworld\n' },
    { name: 'new.txt', content: 'Hello, world!\n' }
  )
)
/* output:
--- old.txt
+++ new.txt
@@ -1,2 +1,1 @@
-hello
-world
+Hello, world!
*/
```

## Maintainers

[@j-f1](https://github.com/j-f1)

## Contribute

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2018 Jed Fox
