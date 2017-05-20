const R = require('ramda')
const throughNByOne = R.curry((limit, n) => n > limit ? false : [n, n + 1])
const throughNBaseTwo = R.curry((limit, n) => n > limit ? false : [n, n * 2])
const result = R.unfold(throughNByOne(50), 1)
const result2 = R.unfold(throughNBaseTwo(256), 4)

console.log(result)
console.log(result2)
