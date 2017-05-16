const shouldBeTrue = [7, 2 ,1, 6]
const shouldBeFalse = [2, 3, 7, 9]
const R = require('ramda')

const isFirstBiggest = R.converge(
  R.equals, [
    R.head,
    xs => R.head(xs.sort( (a, b) => b - a ))
  ]
)

console.log(isFirstBiggest(shouldBeFalse))
console.log(isFirstBiggest(shouldBeTrue))