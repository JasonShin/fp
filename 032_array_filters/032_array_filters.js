const R = require('ramda')

const pets = [
  { name: 'Spike', type: 'dog' },
  { name: 'Spike2', type: 'dog' },
  { name: 'Spike3', type: 'cat' },
  { name: 'Spike4', type: 'cat' },
]

const dogCheck = pet => pet.type === 'dog'

const result = R.filter(dogCheck, pets)
const rej_result = R.reject(dogCheck, pets)
const part_result = R.partition(dogCheck, pets)

console.log(result)
console.log(rej_result)
console.log(part_result)
