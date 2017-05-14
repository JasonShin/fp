const Box = x =>
  ({
    ap: b2 => b2.map(x),
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box(${x})`
  })
const add = x => y => x + y

const res = Box(x => x + 1).ap(Box(2))

console.log(res)

const res2 = Box(add).ap(Box(2)).ap(Box(3))

console.log(res2)

const liftA2 = (f, fx, fy) =>
  fx.map(f).ap(fy)

const res3 = liftA2(add, Box(2), Box(3))

console.log(res3)
