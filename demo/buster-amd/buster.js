var config = module.exports;
config["web-module"] = {
    environment: "browser",
    rootPath: "cs",
    sources: ["testModule.coffee"],
    tests: ["test/*test.coffee"],
    libs: ["require-jquery.js"],
    extensions: [require("buster-amd")],
    'buster-amd':{
      pathMapper: function(path){
        return "cs!" + path.replace(/^\//, "").replace(/\.coffee$/, "");
      }
    }
};
