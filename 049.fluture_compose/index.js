const R = require('ramda')
const Future = require('ramda-fantasy').Future
// const Future = require('fluture')
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
  return Future.encaseP((done) => {
    fetch('https://yesno.wtf/api')
      .then(res => res.json())
      .then(done)
  })
}
*/
console.log('future ', Future)
const getYesOrNo = R.compose(
  R.map(R.prop('answer')),
  R.chain(fetchYesNo),
  fetchYesNo
)

getYesOrNo().fork(console.error, console.log)