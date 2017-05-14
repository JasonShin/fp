const Box = x =>
  ({
    ap: b2 => b2.map(x),
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box(${x})`
  })

const res = Box(x => x + 1).ap(Box(2))

console.log(res)

const res2 = Box(x => y => x + y).ap(Box(2)).ap(Box(3))

console.log(res2)
