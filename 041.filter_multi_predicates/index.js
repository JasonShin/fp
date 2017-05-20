const R = require('ramda')

const cars = [
  { name: 'suv', doors: 4, mpg: 19 },
  { name: 'sedan', doors: 4, mpg: 30 },
  { name: 'hybrid', doors: 4, mpg: 37 },
  { name: 'compact', doors: 2, mpg: 32 },
]

const goodMileage = R.propSatisfies(R.lte(30), 'mpg')
const fourDoors = R.propEq('doors', 4)

const perfectCars = R.allPass([goodMileage, fourDoors])

const result = R.filter(goodMileage, cars)
const result2 = R.filter(fourDoors, cars)
const result3 = R.filter(perfectCars, cars)

console.log(result)
console.log(result2)
console.log(result3)
