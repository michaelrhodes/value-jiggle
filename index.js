var range = require('new-range')
var floor = Math.floor
var random = Math.random

var places = function(value) {
  var matches = value.toString().match(/\.([0-9]*)$/)
  var decimals = (matches || []).slice(1)[0] || ''
  return decimals.length
}

module.exports = function(value, threshold) {
  var decimal = places(value)

  value *= 100
  threshold *= 100

  var high = value + threshold
  var low = value - threshold
  var options = range(low, high)
  var index = floor(random() * options.length)

  return Number((options[index] / 100).toFixed(decimal))
}
