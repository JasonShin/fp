const All = x =>
  ({
    x,
    concat: ({x: y}) =>
      All(x && y),
    inspect: () =>
      `All(${x})`
  })

All.empty = () => All(true)

const res = All(true).concat(All(true).concat(All.empty()))
console.log(res);