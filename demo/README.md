# buster-coffee demo app

This is a small demo app showing how to set up a Buster.JS with
[buster-coffee](https://github.com/busterjs/buster-coffee).


## Running the tests

To run the tests in the demo app, you need to have buster-coffee available. You
can do this in several ways.

On way is to use the bundled `package.json` file to install the latest npm
release of buster-coffee locally in the demo app:

    $ cd ~/dev/buster-coffee/demo
    ~/dev/buster-coffee/demo$ npm install
    ...
    ~/dev/buster-coffee/demo$ buster test
    Firefox 14.0.1, Linux: ..
    1 test case, 2 tests, 2 assertions, 0 failures, 0 errors, 0 timeouts
    Finished in 0.014s
