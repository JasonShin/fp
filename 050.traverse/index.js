const R = require('ramda')
const Fantasy = require('ramda-fantasy')
const Future = Fantasy.Future

function testFuture() {
  return new Future((rej, res) => {
    setTimeout(() => {
      return res(Math.random())
    })
  })
}

const compiled = [testFuture, testFuture, testFuture]

const result = R.traverse(Future.of, testFuture, [1,2,3])
result.fork(console.error, console.log)
console.log(result)