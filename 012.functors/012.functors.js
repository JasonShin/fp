const Task = require('data.task')
const { List, Map } = require('immutable-ext')
const Box = x =>
  ({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box(${x})`
  })
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

const res1 = Box('squirrels')
            .map(s => s.substring(5))
            .map(s => s.toUpperCase())

const res2 = Box('squirrels')
             .map(s => s.substring(5).toUpperCase())

console.log(res1, res2)

const id = x => x

const res3 = List.of('crayons').map(id)
const res4 = id(List.of('crayons'))

console.log(res3, res4)