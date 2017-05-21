const R = require('ramda')
const Future = require('ramda-fantasy').Future
const fetch = require('node-fetch')

const fetchYesNo = () => {
  // return fetch('https://yesno.wtf/api')
  return new Future((rej, resolve) => {
    fetch('https://yesno.wtf/api')
      .then(response => response.json())
      .then((data) => {
        resolve(data)
      })
  })
}
/*
const fetchYesNo = () => {
  return Future((rej, res) => {
    return fetch('https://yesno.wtf/api')
      .then(resp => resp.json())
      .then(res)
  })
}
*/
// fetchYesNo().fork(console.error, console.log)

const yesOrNo = R.compose(
  R.map(R.prop('answer')),
  fetchYesNo
)
yesOrNo().fork(console.error, console.log)