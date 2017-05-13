/*const nextCharForNumberString = (str) => {
  const trimmed = str.trim()
  const number = parseInt(trimmed)
  const nextNumber = number + 1
  return String.fromCharCode(nextNumber)
}*/

const nextCharForNumberString = (str) =>
  [str]
    .map(s => s.trim())
    .map(trimmed => parseInt(trimmed))
    .map(number => number + 1)
    .map(nextNumber => String.fromCharCode(nextNumber))
console.log(nextCharForNumberString('  65  '))