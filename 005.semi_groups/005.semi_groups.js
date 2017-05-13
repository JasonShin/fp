const Sum = x => ({
  x,
  concat: ({x: y}) =>
    Sum(x + y),
  inspect: () =>
    `Sum(${x})`
})

const All = x => ({
  x,
  concat: ({x: y}) =>
    All(x && y),
  inspect: () =>
    `All(${x})`
})

const result = Sum(1).concat(Sum(2))
console.log(result)
const result2 = All(true).concat(All(false))
console.log(result2)

