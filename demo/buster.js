var config = module.exports;

config["Browser tests"] = {
    environment: "browser",
    extensions: [require("buster-coffee")],
    sources: ["mywebapp.coffee"],
    tests: ["*-test.coffee"]
};
