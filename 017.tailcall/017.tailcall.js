'use strict';
function factorial(n) {
  return factorialCalculation(n, 1);
}
function factorialCalculation(x, y) {
  if (x <= 1) {
    return y;
  } else {
    return factorialCalculation(x-1, x*y);
  }
}

console.log(factorial(10000000))