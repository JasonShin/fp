const R = require('ramda')
const countries = [
  { cc: 'AU', flag: 'AU' },
  { cc: 'KR', flag: 'KR' },
  { cc: 'JP', flag: 'JP' },
  { cc: 'CN', flag: 'CN' },
]

const getCountry = R.useWith(R.find, [R.propEq('cc'), R.identity])

const result = getCountry('AU', countries)

console.log(result)
