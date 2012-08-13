//
// This is the first file loaded by RequireJS when on the web, because it is
// referenced in the `data-main` attribute of the <script> tag in `index.html`. 
//
// Since the `cs` loader plugin and it's dependency, the coffee-script library,
// isn't in the current directory, we have to map their short names to their
// correct paths.
//
// Then we use the `cs` loader plugin to load and compile `src/app.coffee`,
// which starts the app.
//
require({
    paths: {
        'cs': '../lib/cs',
        'coffee-script': '../lib/coffee-script'
    }
}, ['cs!app']);
