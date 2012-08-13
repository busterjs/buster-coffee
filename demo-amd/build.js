// This file is taken from https://github.com/jrburke/require-cs and slightly
// modified. Check the require-cs repo and the RequireJS docs for more details.
({
    baseUrl: 'src',

    // Uncomment to turn off uglify minification.
    //optimize: 'none',

    // Stub out the cs module after a build since
    // it will not be needed.
    stubModules: ['cs'],

    paths: {
        'cs': '../lib/cs',
        'coffee-script': '../lib/coffee-script',
        'jquery': '../lib/require-jquery'
    },

    // Just output a single built JS file
    name: 'main',
    out: 'main-built.js',
    exclude: ['coffee-script']

    // Or copy the entire application with built JS to the the ../demo-amd-build dir
    //appDir: '.',
    //dir: '../demo-amd-build',
    //modules: [
    //    {
    //        name: 'main',
    //        exclude: ['coffee-script']
    //    }
    //]
})
