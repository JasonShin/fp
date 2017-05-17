const R = require('ramda')

const person = {
  firstName: 'Fred',
  lastName: 'Shin'
}

// const fLens = R.lens(R.prop('firstName'), R.assoc('firstName'))
const fLens = R.lensProp('firstName')

// const result = R.view(fLens, person)
// const result = R.set(fLens, 'Jason', person)
const result = R.over(fLens, R.toUpper, person)

console.log(result)