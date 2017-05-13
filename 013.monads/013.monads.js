const Box = x =>
  ({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box(${x})`
  })

const join = m =>
  m.chain(x => x)

const m = Box(Box(Box(3)))
console.log(join(m.map(join)) === join(join(m)))