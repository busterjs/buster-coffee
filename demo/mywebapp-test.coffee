assert = buster.assert

buster.testCase 'myapp',
  'hello() greets the world': ->
    assert.equals(window.hello(), 'Hello, world!')

  'hello(name) greets the given name': ->
    assert.equals(window.hello('buster-coffee'), 'Hello, buster-coffee!')
