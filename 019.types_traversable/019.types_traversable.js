const fs = require('fs')
const Task = require('data.task')
const futurize = require('futurize').futurize(Task)
const { List } = require('immutable-ext')

const readFile = futurize(fs.readFile)

const files = List(['stuff.json', 'config.json'])

const res = files.traverse(Task.of, file => readFile(file, 'utf-8'))
            .fork(console.error, console.log)