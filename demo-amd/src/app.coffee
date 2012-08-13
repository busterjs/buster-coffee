define ['jquery', 'cs!mymodule'], ($, mymodule) ->

  render = ($el) ->
    $el.text(mymodule.hello(
      'from an AMD module written in CoffeeScript, and tested with Buster.JS'))

  # Code here will run as soon as all dependencies of this module is loaded,
  # which may be before the document ready event. Thus, we defer any DOM
  # manipulation until document ready by passing a function to jQuery for
  # execution when the document is ready.
  $().ready ->
    render($('#main'))

  # We return an object with the render() function, so that we in the tests can
  # require() this module and test the render() function.
  return {
    render: render
  }
