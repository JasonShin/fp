/*const nextCharForNumberString = (str) => {
 const trimmed = str.trim()
 const number = parseInt(trimmed)
 const nextNumber = number + 1
 return String.fromCharCode(nextNumber)
 }*/

const Box = x =>
  ({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box(${x})`
  })

const LazyBox = g => ({
  fold: f => f(g()),
  map: f => LazyBox(() => f(g()))
})

const result = LazyBox(() => '  65 ')
    .map(s => s.trim())
    .map(trimmed => parseInt(trimmed))
    .map(number => number + 1)
    .map(nextNumber => String.fromCharCode(nextNumber))
    .fold(char => char.toLowerCase())
console.log(result)