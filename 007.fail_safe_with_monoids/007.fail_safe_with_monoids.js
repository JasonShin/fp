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

const res = All(true).concat(All(true).concat(All.empty()))
console.log(res);

console.log(sum([1,2,3]))