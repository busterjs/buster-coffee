var config = module.exports;

config["Node tests"] = {
    environment: "node",
    extensions: [require("buster-lint")],
    tests: ["test/*-test.js"],
    "buster-lint": require("./autolint.js")
};
