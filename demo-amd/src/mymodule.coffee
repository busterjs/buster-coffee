define [], () ->

  hello: (name) ->
    name or= 'world'
    "Hello, #{name}!"
