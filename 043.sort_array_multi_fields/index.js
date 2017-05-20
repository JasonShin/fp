const R = require('ramda')

const sample = [
  { name: 'Sally', age: 29, height: 11 },
  { name: 'Zac', age: 29, height: 15 },
  { name: 'John', age: 32, height: 62 },
  { name: 'Lisa', age: 11, height: 32 },
  { name: 'Bob', age: 68, height: 1 },
]

const result = R.sortWith([
  R.ascend(R.prop('age')),
  R.descend(R.prop('height')),
  R.ascend(R.prop('name'))
], sample)

console.log(result)
