const R =require('ramda')

const product = {
  name: 'widget',
  price: 10,
  shippingWeight: '2 lbs'
}

const getProps = R.pick(['name', 'price'])
const getProps2 = R.pickAll(['name', 'price', 'category'])
const getProps3 = R.pickBy(val => Number(val))
const omitProps = R.omit(['name'])
const result = getProps(product)
const result2 = getProps2(product)
const result3 = getProps3(product)
const result4 = omitProps(product)

console.log('result ', result)
console.log('result2 ', result2)
console.log('result3 ', result3)
console.log('result4 ', result4)
