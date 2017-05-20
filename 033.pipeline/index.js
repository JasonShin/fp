const R = require('ramda')

const teams = [
  { name: 'Lions', score: 5 },
  { name: 'Tigers', score: 4 },
  { name: 'Bear', score: 6 },
  { name: 'Cats', score: 2 },
]

/*
const getTopName =
  R.compose(
    R.prop('name'),
    R.head,
    R.sort((a,b) => b.score - a.score)
  )
*/
const getTopName = R.pipe(
  R.sort((a,b) => b.score - a.score),
  R.head,
  R.prop('name')
)

const result = getTopName(teams)

console.log(result)