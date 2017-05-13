const Sum = x => ({
  x,
  concat: o =>
    Sum(x + o.x),
  inspect: () =>
    `Sum(${x})`
})

const result = Sum(1).concat(Sum(2))
console.log(result)
