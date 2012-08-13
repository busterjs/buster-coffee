//
// This is RequireJS configuration that is only used when running tests.
//
// On the web, using index.html, the RequireJS `basePath` is by default
// relative to the initial script set in the `data-main` attribute. In our
// case, `src/`.
//
// When running tests, the default `basePath` is one level up, thus we have to
// redefine the paths to the libs from `src/main.js`, and we have to map all
// modules under `src/` from `foo` to `src/foo`.
//
// We could manually set `basePath` to `src/` and avoid the following, but then
// Buster.JS wouldn't find the tests, as it would be looking for
// `src/test/foo.coffee` instead of `test/foo.coffee`.
//
// I think the current situation here is crap, but I'm not sure what's the best
// way to solve it. I guess setting `basePath` to `src/` and adding to logic to
// the `pathMapper` function for rewriting test file paths from
// `test/foo.coffee` to `../test/foo.coffee` could maybe work.
//
// What do you think? Better suggestions?
//
var require = {
    paths: {
        'coffee-script': 'lib/coffee-script',
        'cs': 'lib/cs',

        'app': 'src/app',
        'mymodule': 'src/mymodule'
    }
};
