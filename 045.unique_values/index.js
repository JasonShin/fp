const R = require('ramda')

const product = {
  name: "Sample Data",
  sizes: [
    {
      name: "L",
      colors: [
        {
          name: "Red"
        },
        {
          name: "Blue"
        }
      ]
    },
    {
      name: "M",
      colors: [
        {
          name: "Green"
        },
        {
          name: "Yellow"
        }
      ]
    },
    {
      name: "S",
      colors: [
        {
          name: "Orange"
        },
        {
          name: "Purple"
        },
        {
          name: "Blue"
        }
      ]
    }
  ]
}

const getSizes = R.prop('sizes')
const getColors = R.chain(R.prop('colors'))
const getColorNames = R.pluck('name')

const getUniqueColors = R.compose(
  R.uniq,
  getColorNames,
  getColors,
  getSizes
)

const result = getUniqueColors(product)

console.log(result)