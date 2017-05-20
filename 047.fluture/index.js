const fs = require('fs')
const Future = require('fluture')

const getPackageName = (file) => {
  return Future.node((done) => {
    fs.readFile(file, 'utf8', done)
  })
  .chain(Future.encase(JSON.parse))
  .map(x => x.name)
}

getPackageName('./047.fluture/test.json')
  .fork(console.error, console.log)
