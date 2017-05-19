const R = require('ramda')

// const add = R.curry((a, b) => a + b)
const add = R.curryN(2, (a, b) => a + b)
const mult = a => b => a * b
const multiply = R.curryN(2, mult)
const inc = add(4)

const result = inc(3)
const result2 = multiply(2, 4)
console.log(result)
console.log(result2)
