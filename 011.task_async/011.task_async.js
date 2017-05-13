const Task = require('data.task')
const fs = require('fs')

const readFile = (fileName, enc) =>
  new Task((rej, res) =>
    fs.readFile(fileName, enc, (err, contens) =>
      err ? rej(err) : res(contens)))

const writeFile = (filename, contents) =>
    new Task((rej, res) =>
      fs.writeFile(filename, contents, (err, success) =>
        err ? rej(err) : res(success)))

const app = () =>
readFile('./011.task_async/config.json', 'utf-8')
.map(contents => contents.replace(/8/g, '6'))
.chain(contents => writeFile('./011.task_async/config1.json', contents))

app().fork(e => console.log('error ', e),
            x => console.log('success ', x))