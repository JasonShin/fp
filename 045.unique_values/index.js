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
const sizes = getSizes(product)

const getColors = R.map(R.prop('colors'))
const colors = getColors(sizes)

const getColorNames = R.map(R.pluck('name'))
const colorNames = getColorNames(colors)

const getUniqueColors = R.compose(
  getColorNames,
  getColors,
  getSizes
)

const result = getUniqueColors(product)

console.log(result)