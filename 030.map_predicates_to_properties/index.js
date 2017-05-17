const R = require('ramda')
const products = [
  { name: 'jason', price: 80, category: 'clothes' },
  { name: 'Hoodie', price: 60, category: 'clothes' },
  { name: 'Jacket', price: 120, category: 'clothes' },
  { name: 'cards', price: 35, category: 'eletronics' },
  { name: 'jason shin', price: 69, category: 'yo' }
]

const predicate = R.where({
  category: R.equals('clothes'),
  price: R.lt(R.__, 90)
})

const getResults = R.pipe(
  R.filter(predicate),
  R.pluck('name')
)
const result = getResults(products)
console.log(result)
