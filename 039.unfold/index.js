const R = require('ramda')
const throughNByOne = R.curry((limit, n) => n > limit ? false : [n, n + 1])
const result = R.unfold(throughNByOne(50), 1)

console.log(result)
