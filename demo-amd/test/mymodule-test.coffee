define [], () ->

  buster.testCase 'mymodule',

    setUp: (done) ->
      require ['cs!mymodule'], done (module) =>
        @module = module

    'hello() greets the world': ->
      assert.equals(@module.hello(), 'Hello, world!')

    'hello(name) greets the given name': ->
      assert.equals(@module.hello('Buster.JS+RequireJS+CoffeeScript'),
        'Hello, Buster.JS+RequireJS+CoffeeScript!')
