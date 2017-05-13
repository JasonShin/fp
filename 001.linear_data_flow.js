/*const nextCharForNumberString = (str) => {
  const trimmed = str.trim()
  const number = parseInt(trimmed)
  const nextNumber = number + 1
  return String.fromCharCode(nextNumber)
}*/

const Box = x =>
  ({
    map: f => Box(f(x)),
    inspect: () => `Box(${x})`
  })

const nextCharForNumberString = (str) =>
  Box(str)
    .map(s => s.trim())
    .map(trimmed => parseInt(trimmed))
    .map(number => number + 1)
    .map(nextNumber => String.fromCharCode(nextNumber))
console.log(nextCharForNumberString('  65  '))