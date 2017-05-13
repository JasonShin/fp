const Box = x =>
  ({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box(${x})`
  })

/*
const moneyToFloat = str =>
  parseFloat(str.replace(/\$/g, ''))
*/
// Note: replace fold to map because I'm going to map it over inside applyDiscount
const moneyToFloat = str =>
  Box(str)
  .map(s => s.replace(/\$/g, ''))
  .map(s => parseFloat(s))

/*
const percentToFloat = str => {
  const replaced = str.replace(/\%/g, '')
  const number = parseFloat(replaced)
  return number * 0.01
}
*/

// Note: replace fold to map because I'm going to map it over inside applyDiscount
const percentToFloat = str =>
  Box(s => s.replace(/\%/g, ''))
  .map(replaced => parseFloat(replaced))
  .map(number => number * 0.01)
