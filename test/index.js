var tape = require('tape')
var jiggle = require('../')

tape('decimal number', function(test) {
  var input = 1.25
  var threshold = 0.5
  var sum = input + threshold
  var diff = input - threshold
  var output = jiggle(input, threshold)
  var message = '(' + input + ' -> ' + output + ')'

  test.ok(output >= diff && output <= sum, message)
  test.end()
})

tape('integer', function(test) {
  var input = 10
  var threshold = 1
  var sum = input + threshold
  var diff = input - threshold
  var output = jiggle(input, threshold)
  var message = '(' + input + ' -> ' + output + ')'

  test.ok(output >= diff && output <= sum, message)
  test.end()
})
