const add = x => y => x + y

const inc = add(1)

const res = inc(2)

console.log(res)

const modulo = dvr => dvd => dvd % dvr

const isOdd = modulo(2)

const res2 = isOdd(22)

console.log(res2)

const filter = pred => xs => xs.filter(pred)

const getAllOdds = filter(isOdd)

const res3 = getAllOdds([1,2,3,4])

console.log(res3)

const replace = regex => repStr => str => str.replace(regex, repStr)

const censor = replace(/[aeiou]/g)('*')

const res4 = censor('Hello world dododo yo')

console.log(res4)

