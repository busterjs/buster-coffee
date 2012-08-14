# Buster.JS + AMD + CoffeeScript demo app

This is a small demo app showing how to set up a project with Buster.JS,
buster-amd, and CoffeeScript, using RequireJS as the AMD implementation.

The example does not make use of buster-coffee, as RequireJS can compile
CoffeeScript using the [require-cs](https://github.com/jrburke/require-cs)
plugin.


## Running the tests

To run the tests in the demo app, you need to have buster-amd available. You
can do this in one of several ways.

One way is to use the bundled `package.json` file to install the latest npm
release of buster-amd locally in the demo app:

    $ cd ~/dev/buster-coffee/demo-amd
    ~/dev/buster-coffee/demo-amd$ npm install
    ...
    ~/dev/buster-coffee/demo-amd$ buster test
    Firefox 14.0.1, Linux: ...
    2 test cases, 3 tests, 4 assertions, 0 failures, 0 errors, 0 timeouts
    Finished in 0.107s


## Trying the demo

Since the demo uses RequireJS, which will fetch some of the resources using
XHR, it won't work to simply open the `index.html` file in your browser. But,
if you got Python installed, you can quickly launch an HTTP server that will
serve all files in the demo dir:

    $ cd ~/dev/buster-coffee/demo-amd
    ~/dev/buster-coffee/demo-amd$ python -m SimpleHTTPServer
    Serving HTTP on 0.0.0.0 port 8000 ...

You can now view the demo at http://localhost:8000/


## Understanding the demo

I'm rather unexperienced with AMD/RequireJS myself, and made this demo mostly
to have a working example of how you don't need buster-coffee to compile your
CoffeeScript files if you're using AMD and buster-amd.

I've sprinkled comments all over the app, trying to explain why everything is
the way it is. If there's something you don't understand, or you see room for
improvement, feel free to drop me a line, e.g by opening an issue.
