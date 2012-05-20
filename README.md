# buster-coffee

An extension for [buster.js](http://busterjs.org) to automatically compile your
[CoffeeScript](http://coffeescript.org) files before running tests.


## Installation

Install from npm:

    npm install buster-coffee

Then add it to your `buster.js` config file:

    config["My tests"] = {
      // ...
      extensions: [require("buster-coffee")]
      // ...
    };


## Configuration

The extension has no configuration options.


## Example web project

See the `demo/` dir for an example project using Buster.js and buster-coffee to
test a function that is implemented in CoffeeScript, using tests written in
CoffeeScript.


## Node.js and `require()`

Currently, buster-coffee does not work with files that are to be included using
`require()`. buster-coffee never writes any files to disk, while `require()`
explictly looks for the files it will include on disk. Because of this,
buster-coffee has limited use for Node.js development in CoffeeScript.


## Changelog

### 0.1.1 (2012-05-20)

- Use the coffee-script module's API instead of executing the `coffee` command.

### 0.1.0 (2012-05-20)

- Initial release.


## License

Copyright 2012, Stein Magnus Jodal.

Released under the Simplified BSD license. See the `LICENSE` file for details.
