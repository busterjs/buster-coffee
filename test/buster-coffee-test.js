var buster = require("buster");
var resources = require("buster-resources");
var extension = require("../lib/buster-coffee");
var assert = buster.referee.assert;

buster.testCase("buster-coffee extension", {
    setUp: function () {
        this.config = buster.testRunner.create();
        this.resourceSet = resources.resourceSet.create();

        this.resourceSet.addResource({
            path: "/bar.js",
            etag: "22eea2d643fdeb0867fb4233a334cd04a3490652",
            content: "var bar = 7;"
        });
        this.resourceSet.loadPath.append("/bar.js");

        this.resourceSet.addResource({
            path: "/cafe.coffee",
            etag: "9996f32e9ec29ec814ab89182bb4dd05d36e13f6",
            content: "a = 42",
            encoding: "utf-8" // This should not be base64 encoded
        });
        this.resourceSet.loadPath.append("/cafe.coffee");

        this.resourceSet.addResource({
            path: "/diner.js",
            etag: "212e9b7214acf4f2df671a0679e8167a9c230324",
            content: "bar = 8;"
        });
        this.resourceSet.loadPath.append("/diner.js");
    },

    "leave .coffee files untouched if the environment is node": function () {
        this.config.environment = "node";
        extension.configure(this.config);
        this.config.emit("load:resources", this.resourceSet);

        var paths = this.resourceSet.loadPath.paths();
        assert.equals(paths.length, 3);
        assert.equals(paths[0], "/bar.js");
        assert.equals(paths[1], "/cafe.coffee");
        assert.equals(paths[2], "/diner.js");
    },

    "replaces .coffee files with .js and keeps the path order": function () {
        extension.configure(this.config);
        this.config.emit("load:resources", this.resourceSet);

        var paths = this.resourceSet.loadPath.paths();
        assert.equals(paths.length, 3);
        assert.equals(paths[0], "/bar.js");
        assert.equals(paths[1], "/cafe.coffee.js");
        assert.equals(paths[2], "/diner.js");
    },

    "adds compiled coffee resources to the resource set": function (done) {
        extension.configure(this.config);
        this.config.emit("load:resources", this.resourceSet);

        var resource = this.resourceSet.get("/cafe.coffee.js");
        resource.content().then(done(function (content) {
            assert.match(content,
                "(function() {\n  var a;\n\n  a = 42;\n\n}).call(this);");
        }));
    },

    "reuse the etag of the .coffee resource on the .js resource": function () {
        extension.configure(this.config);
        this.config.emit("load:resources", this.resourceSet);

        var coffeeResource = this.resourceSet.get("/cafe.coffee");
        var jsResource = this.resourceSet.get("/cafe.coffee.js");
        assert.defined(coffeeResource.etag);
        assert.equals(coffeeResource.etag, jsResource.etag);
    },

    "handles base64 encoded .coffee resources": function (done) {
        // XXX resource.mimeType() may think that .coffee files are binary
        // data, so they are passed around base64 encoded. Until the underlying
        // mime library supports .coffee files, it seems easiest to just
        // support both utf-8 and base64 encoded .coffee content.

        // Override any mimetype definitions for coffee files to have the test
        // work with newer versions of the mime package too.
        var mime = require(
            "../node_modules/buster-resources/node_modules/mime"
        );
        mime.define({"application/x-foo": ["coffee"]});

        this.resourceSet.addResource({
            path: "/more.coffee",
            content: new Buffer("b = 42").toString("base64")
        });
        this.resourceSet.loadPath.append("/more.coffee");

        extension.configure(this.config);
        this.config.emit("load:resources", this.resourceSet);

        var resource = this.resourceSet.get("/more.coffee.js");
        resource.content().then(done(function (content) {
            assert.match(content,
                "(function() {\n  var b;\n\n  b = 42;\n\n}).call(this);");
        }));
    },

    "the resource content promise is rejected on error": function (done) {
        this.resourceSet.addResource({
            path: "/invalid.coffee",
            content: ". # invalid CoffeeScript",
            encoding: "utf-8"
        });
        this.resourceSet.loadPath.append("/invalid.coffee");

        extension.configure(this.config);
        this.config.emit("load:resources", this.resourceSet);

        var resource = this.resourceSet.get("/invalid.coffee.js");
        resource.content().then(null, done(function (error) {
            assert.match(error, "Unexpected");
        }));
    }
});
