var config = module.exports;

config['Browser tests'] = {
    environment: 'browser',

    // We need the buster-amd extension
    extensions: [require('buster-amd')],

    // We give buster-amd a pathmapper so that it can map from Buster.JS's full
    // file paths to AMD compatible module names. If you're going to use
    // multiple AMD loader plugins, for e.g. templates, you need to smarten up
    // this function so that it can handle all the different loader plugins you
    // use.
    'buster-amd': {
        pathMapper: function (path) {
            return 'cs!' + path.replace(/^\//, '').replace(/\.coffee$/, '');
        }
    },

    libs: [
        // Extra RequireJS config for when we run tests
        'test/require-config.js',

        // This is simply a file combining RequireJS and jQuery. The
        // combination is convenient if you're going to require() non-module
        // jQuery plugins, as this ensures that jQuery always is available
        // before RequireJS starts working. See
        // https://github.com/jrburke/require-jquery for details.
        'lib/require-jquery.js'
    ],

    resources: [
        // The following scripts needs to be served by Buster.JS, so that
        // RequireJS can fetch them async, but they cannot be
        // added to the libs section above, as they contain anonymous define()
        // modules, which will throw "Mismatched anonymous define() module"
        // errors if included in <script> tags on the page, like the libs are.

        // This is the standard distribution of CoffeeScript
        'lib/coffee-script.js',

        // This is require-cs, the CoffeeScript loader plugin for RequireJS/etc
        'lib/cs.js'
    ],

    // The source files will be loaded by RequireJS, but we need to add them
    // here so that Buster.JS will serve them.
    sources: ['src/**/*.coffee'],

    // As far as I understand, the test files are processed by the above
    // `pathMapper` to get the equivalent AMD module names. Then buster-amd
    // loads and executes all the test modules.
    tests: ['test/**/*-test.coffee']
};
