#!/bin/sh

# This file is taken from https://github.com/jrburke/require-cs and slightly
# modified. Check the require-cs repo and the RequireJS docs for more details.

rm -rf ../demo-amd-build ./main-built.js

# r.js can be installed from npm using `sudo npm -g install requirejs`
r.js -o build.js
