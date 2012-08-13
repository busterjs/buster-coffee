# You could also add 'cs!app' to the dependencies list on the following line,
# and remove the entire setUp() method. By require()-ing the module we are testing
# in the setUp() method instead, we will have a bit more context in the error
# messages if loading the module fails. I got this tip from Tiago Rodrigues.
define ['jquery'], ($) ->

  buster.testCase 'app',

    setUp: (done) ->
      # require() is async, so we need to accept the `done` argument from
      # Buster.JS and call it either in the innermost callback, or wrap the
      # innermost callback (like we've done here). If we don't accept a `done`
      # argument and call it when we're done, the tests will execute before the
      # require()-ed modules are available, and thus fail.
      require ['cs!app'], done (app) =>
        @app = app

    'shows greeting in given element': ->
      $el = $('<div/>')
      assert.equals('', $el.text())

      @app.render($el)
      
      assert.equals(
        'Hello, from an AMD module written in CoffeeScript, and tested with Buster.JS!',
        $el.text())
