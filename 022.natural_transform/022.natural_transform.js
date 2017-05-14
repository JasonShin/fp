const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`
})

const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`
})
const Box = x =>
  ({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box(${x})`
  })

const { List } = require('immutable-ext')
const Task = require('data.task')

const res = List(['hello', 'world'])
  .chain(x => x.split(''))

console.log(res)

// DB
const fake = id =>
  ({ id: id, name: 'user1', best_friend_id: id + 1 })

const Db = ({
  find: id =>
    new Task(
      (rej, res) =>
        res(id > 2 ? Right(fake(id)) : Left('not found'))
    )
})

const eitherToTask = e =>
  e.fold(Task.rejected, Task.of)

Db.find(3)
  .chain(eitherToTask)
  .chain(user =>
    Db.find(user.best_friend_id))
  .chain(eitherToTask)
  .fork(e => console.error(e), r => console.log(r))