const R = require('ramda')

const queryString = '?page=2&pageSize=10&total=203'

const parseQs = R.compose(R.fromPairs, R.map(R.split('=')), R.split('&'), R.tail)

const result = parseQs(queryString)

console.log(result)