define ["testModule"], (mod) ->

  buster.testCase "some test",

	  "test that fails" : ->
	    assert.match mod, {name: "wrong name"}

	  "test that succeeds" : ->
	    assert.match mod, {name: "module"}
