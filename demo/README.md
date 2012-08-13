# buster-coffee demo app

This is a small demo app showing how to set up a Buster.JS with
[buster-coffee](https://github.com/jodal/buster-coffee).


## Running the tests

To run the tests in the demo app, you need to have buster-coffee available. You
can do this in one of four ways.

Use the bundled `package.json` file to install the latest npm release of
buster-coffee locally in the demo app:

    $ cd ~/dev/buster-coffee/demo
    $ npm install
    Firefox 14.0.1, Linux: ..
    1 test case, 2 tests, 2 assertions, 0 failures, 0 errors, 0 timeouts
    Finished in 0.014s

Or, install the latest npm release of buster-coffee globally:

    $ sudo npm -g install buster-coffee
    ...
    $ cd ~/dev/buster-coffee/demo
    ~/dev/buster-coffee/demo$ buster test
    Firefox 14.0.1, Linux: ..
    1 test case, 2 tests, 2 assertions, 0 failures, 0 errors, 0 timeouts
    Finished in 0.005s

Or, link your buster-coffee checkout into your global `node_modules` dir. This
is useful for buster-coffee development.

    $ cd ~/dev/buster-coffee/
    ~/dev/buster-coffee$ sudo npm link
    /usr/lib/node_modules/buster-coffee -> /home/foo/dev/buster-coffee
    ~/dev/buster-coffee$ cd demo/
    ~/dev/buster-coffee/demo$ buster test
    Firefox 14.0.1, Linux: ..
    1 test case, 2 tests, 2 assertions, 0 failures, 0 errors, 0 timeouts
    Finished in 0.008s

Or, include the parent directory of the buster-coffee checkout in `NODE_PATH`.
This is useful for buster-coffee development.

    $ cd ~/dev/buster-coffee/demo/
    ~/dev/buster-coffee/demo$ export NODE_PATH=~/dev/:$NODE_PATH
    ~/dev/buster-coffee/demo$ buster test
    Firefox 14.0.1, Linux: ..
    1 test case, 2 tests, 2 assertions, 0 failures, 0 errors, 0 timeouts
    Finished in 0.011s
