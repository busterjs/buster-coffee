var buster = require("buster");
var when = require("when");
var coffee = require("../lib/coffee");

buster.testCase("buster-coffee compiler", {
    "compiles valid CoffeeScript to JavaScript": function (done) {
        coffee.compile("a = 42").then(done(function (result) {
            assert.match(result,
                "(function() {\n  var a;\n\n  a = 42;\n\n}).call(this);");
        }));
    },

    "fails on invalid CoffeeScript": function (done) {
        coffee.compile(".").otherwise(done(function (error) {
            assert.match(error,
                "Error: Parse error on line 1: Unexpected '.'");
        }));
    }
});
