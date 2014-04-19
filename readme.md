# value-jiggle 
value-jiggle changes values within a given threshold.

[![Build status](https://travis-ci.org/michaelrhodes/value-jiggle.png?branch=master)](https://travis-ci.org/michaelrhodes/value-jiggle)

[![Browser support](https://ci.testling.com/michaelrhodes/value-jiggle.png)](https://ci.testling.com/michaelrhodes/value-jiggle)

## Install
```
$ npm install value-jiggle
```

### Example
``` js
var jiggle = require('value-jiggle')

jiggle(10, 1)
// => 9 || 10 || 11

jiggle(1.25, 0.5)
// => 0.75 || … || 1.74
```

### License
[MIT](http://opensource.org/licenses/MIT)
