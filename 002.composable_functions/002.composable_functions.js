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
  Box(str.replace(/\$/g, ''))
  .map(r => parseFloat(r))

/*
const percentToFloat = str => {
  const replaced = str.replace(/\%/g, '')
  const number = parseFloat(replaced)
  return number * 0.01
}
*/

// Note: replace fold to map because I'm going to map it over inside applyDiscount
const percentToFloat = str =>
  Box(str.replace(/%/g, ''))
  .map(replaced => parseFloat(replaced))
  .map(number => number * 0.01)
/*
const applyDiscount = (price, discount) => {
  const cost = moneyToFloat(price)
  const savings = percentToFloat(discount)
  return cost - cost * savings
}
*/
const applyDiscount = (price, discount) =>
  moneyToFloat(price)
    .fold(cost =>
      percentToFloat(discount)
        .fold(savings =>
          cost - cost * savings))

console.log(percentToFloat('20%'))
const result = applyDiscount('$7.00', '20%')
console.log(result)