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
const moneyToFloat = str =>
  Box(str)
  .map(s => s.replace(/\$/g, ''))
  .fold(s => parseFloat(s))

/*
const percentToFloat = str => {
  const replaced = str.replace(/\%/g, '')
  const number = parseFloat(replaced)
  return number * 0.01
}
*/
const percentToFloat = str =>
  Box(s => s.replace(/\%/g, ''))
  .map(replaced => parseFloat(replaced))
  .fold(number => number * 0.01)
