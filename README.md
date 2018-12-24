# cli-diff

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
TODO: Put more badges here.

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
