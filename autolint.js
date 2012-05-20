module.exports = {
    paths: [
        "lib/*.js",
        "test/*.js"
    ],
    linter: "jslint",
    linterOptions: {
        node: true,
        sloppy: true,
        vars: true,
        predef: [
            "assert",
            "refute",
            "buster"
        ]
    }
};
