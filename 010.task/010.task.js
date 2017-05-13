const Task = require('data.task')

const launchMissile = () =>
  new Task((rej, res) => {
    console.log('launched missile!')
    res('missiles launched')
  })

launchMissile()
  .map(x => x + '!')
  .fork(e => console.log('error! ', e),
       x => console.log('success ', x))