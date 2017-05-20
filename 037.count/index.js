const R = require('ramda')
const string = `
  aisjfaisgjf
  agijasi
  toast
  toast
  qweiwr
  ..
  qigofjqwigfj??
  qpgioejqe!!
`

const countWords = R.countBy(R.toLower)
const matchWords = R.match(/\w+/g)
const countMatchingWords = R.compose(
  R.invert,
  countWords,
  matchWords
)
const result = countMatchingWords('I really really really love love ramda')

console.log(result)
