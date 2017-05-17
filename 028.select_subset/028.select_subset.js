const R = require('ramda')
const products = [
  { name: 'jason', price: 80, category: 'clothes' },
  { name: 'Hoodie', price: 60, category: 'clothes' },
  { name: 'Jacket', price: 120, category: 'clothes' },
  { name: 'cards', price: 35, category: 'cards' }
]

const getNameAndPrice = R.project(['name', 'price'])

const result = getNameAndPrice(products)

console.log(result)
