import chalk from 'chalk'
import dedent = require('dedent')

import diff from '../src'

const ansi = (s: string) => s.replace(/\x1b/g, '^[')

const left = dedent`
  line1
  line2
  line4
  line5
`
const right = dedent`
  line1
  line2
  line3
  line4
  line5+
`

describe('diff', () => {
  it('works with file objects', () => {
    chalk.enabled = false
    expect(
      ansi(
        diff(
          { name: 'left', content: left, header: 'LEFT HEADER' },
          { name: 'right', content: right, header: 'RIGHT HEADER' }
        )
      )
    ).toMatchInlineSnapshot(`
"--- left	LEFT HEADER
+++ right	RIGHT HEADER
@@ -1,4 +1,5 @@
 line1
 line2
+line3
 line4
\\\\ No newline at end of file
-line5
+line5+
"
`)
  })
  it('works when not using ANSI', () => {
    chalk.enabled = false
    expect(ansi(diff(left, right))).toMatchInlineSnapshot(`
"@@ -1,4 +1,5 @@
 line1
 line2
+line3
 line4
\\\\ No newline at end of file
-line5
+line5+
"
`)
  })
  it('works with ANSI enabled', () => {
    chalk.enabled = true
    chalk.level = 1
    expect(ansi(diff(left, right))).toMatchInlineSnapshot(`
"^[[2m^[[34m@@ -1,4 +1,5 @@^[[39m^[[22m
 line1
 line2
^[[32m+line3^[[39m
 line4
^[[2m^[[33m\\\\ No newline at end of file^[[39m^[[22m
^[[31m-line5^[[39m
^[[32m+line5+^[[39m
"
`)
  })
})
