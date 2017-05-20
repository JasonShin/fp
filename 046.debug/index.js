const R = require('ramda')

const queryString = '?page=2&pageSize=10&total=203'

const parseQs = R.compose(
  R.tap(console.log),
  R.fromPairs,
  R.tap(console.log),
  R.map(R.split('=')),
  R.tap(console.log),
  R.split('&'),
  R.tap(console.log),
  R.tail,
  R.tap(console.log)
)

const result = parseQs(queryString)

console.log(result)
