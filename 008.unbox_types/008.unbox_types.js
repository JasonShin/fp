const { Map, List } = require('immutable-ext')

const Sum = x => ({
  x,
  concat: ({x: y}) =>
    Sum(x + y),
  inspect: () =>
    `Sum(${x})`
})
Sum.empty = () => Sum(0)

const res = [Sum(1), Sum(2), Sum(3)]
          .reduce((acc, x) => acc.concat(x), Sum.empty())

const res2 = Map({ brian: 3, sara: 4 })
            .map(Sum)
            .fold(Sum.empty())

const res3 = List.of(1,2,30)
            .map(Sum)
            .fold(Sum.empty())

console.log(res)
console.log(res2)
console.log(res3)