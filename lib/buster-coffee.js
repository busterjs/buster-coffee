var coffee = require("coffee-script");

function base64decode(input) {
    return new Buffer(input, "base64").toString("utf-8");
}

function compileCoffeeResource(resourceSet, coffeePath, jsPath) {
    var coffeeResource = resourceSet.get(coffeePath);
    resourceSet.addResource({
        path: jsPath,
        etag: coffeeResource.etag,
        content: function () {
            if (coffeeResource.encoding === "base64") {
                return coffeeResource.content()
                    .then(base64decode).then(coffee.compile);
            } else {
                return coffeeResource.content().then(coffee.compile);
            }
        }
    });
}

module.exports = {
    name: "buster-coffee",

    configure: function (config) {
        if (config.environment === "node") { return; }
        config.on("load:resources", function (resourceSet) {
            var paths = resourceSet.loadPath.paths();
            resourceSet.loadPath.clear();
            paths.forEach(function (path) {
                if (/\.coffee$/.test(path)) {
                    var jsPath = path + ".js";
                    compileCoffeeResource(resourceSet, path, jsPath);
                    resourceSet.loadPath.append(jsPath);
                } else {
                    resourceSet.loadPath.append(path);
                }
            });
        });
    }
};
