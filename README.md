# Safari Top Level Await Bug

Reproduction for https://bugs.webkit.org/show_bug.cgi?id=242740.

The bug causes module load failures when using top-level await to simultaneously
import the same module in multiple files.

In practice, this bug makes top-level await unusable in Safari.

## Reproduction

1. Open http://maxpatiiuk.github.io/safari-top-level-await-bug.
2. If in safari, you will see an alert() about modules failing to load.
   Alternatively, you open the console, you can see that module was loaded as
   `undefined` (incorrect). Module loads correctly in Chrome, Edge and Firefox.
