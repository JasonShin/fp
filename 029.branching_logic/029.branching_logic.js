const R = require('ramda')
const products = [
  { name: 'jason', price: 80, category: 'clothes' },
  { name: 'Hoodie', price: 60, category: 'clothes' },
  { name: 'Jacket', price: 120, category: 'clothes' },
  { name: 'cards', price: 35, category: 'eletronics' },
  { name: 'jason shin', price: 69, category: 'yo' }
]

const pLens = R.lensProp('price')
const applyDiscount = R.curry((perc, amt) => amt - (amt * (perc / 100)))

const adjustPrice = R.cond([
  [
    R.propEq('category', 'clothes'),
    R.over(pLens, applyDiscount(50))
  ],
  [
    R.propEq('category', 'eletronics'),
    R.over(pLens, applyDiscount(10))
  ],
  [
    R.T, R.identity
  ]
])

const result = R.map(adjustPrice, products)

console.log(result)
