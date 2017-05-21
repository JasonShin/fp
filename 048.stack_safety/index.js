const Future = require('fluture')

const add1 = x => x + 1
let m = Future.of(1)

for(let i = 0; i < 100000; i++) {
  m = m.map(add1)
}

// m.fork(console.error, console.log)

const z = (function recur(x){
  const mx = Future.of(x + 1);
  return x < 100000 ? mx.chain(recur) : mx;
}(1));

z.fork(console.error, console.log);
