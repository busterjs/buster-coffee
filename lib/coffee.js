var spawn = require("child_process").spawn;
var when = require("when");

module.exports = {
    compile: function (coffeeSrc) {
        var deferred = when.defer();

        var compiler = spawn("coffee", ["--stdio", "--print"]);
        var error = "";
        var jsSrc = "";

        compiler.stderr.on("data", function (data) {
            error += data;
        });
        compiler.stdout.on("data", function (data) {
            jsSrc += data;
        });
        compiler.on("exit", function (exitCode) {
            if (exitCode === 0) {
                deferred.resolve(jsSrc);
            } else {
                deferred.reject(error);
            }
        });
        compiler.stdin.end(coffeeSrc);

        return deferred.promise;
    }
};
