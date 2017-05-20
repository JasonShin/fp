const R = require('ramda')
const getName = () => Promise.resolve('Jason')
const getHobbies = () => new Promise((res, rej) => {
  setTimeout(() => {
    res(['coding', 'fp', 'wow'])
  }, 500)
})

Promise.all([getName(), getHobbies()])
  .then(R.zipObj(['name', 'hobbies']))
  .then(R.fromPairs)
  .then(console.log)
