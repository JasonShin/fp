const Right = x => ({
  chain: f => f(x),
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`
})

const Left = x => ({
  chain: f => Left(m),
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`
})

const fromNullable = x =>
  x != null ? Right(x) : Left(null)

const { List, Map } = require('immutable-ext')

const Iso = (to, from) =>
  ({
    to,
    from
  })

const chars = Iso(s => s.split(''), c => c.join(''))

const truncate = str =>
  chars.from(chars.to(str).slice(0, 3)).concat('...')

const res = truncate('hello world!')
console.log(res)