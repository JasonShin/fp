const All = x =>
  ({
    x,
    concat: ({x: y}) =>
      All(x && y),
    inspect: () =>
      `All(${x})`
  })

All.empty = () => All(true)

const sum = xs =>
  xs.reduce((acc, x) => acc + x, 0)

const all = xs =>
  xs.reduce((acc, x) => acc && x, true)

const first = xs =>
  xs.reduce((acc, x) => acc)

const res = All(true).concat(All(true).concat(All.empty()))
console.log(res);

console.log(sum([1,2,3]))

console.log(all([true, true]))

console.log(first([1, 2, 3]))