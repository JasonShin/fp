const R = require('ramda')
const string = `
  aisjfaisgjf
  agijasi
  
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
const result = countMatchingWords(string)

console.log(result)
