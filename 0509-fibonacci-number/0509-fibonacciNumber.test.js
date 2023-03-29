const fib = require("./0509-fibonacciNumber");

let n = 2;
let expectedOutput = 1;
let actualOutput = fib(n);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

n = 3;
expectedOutput = 2;
actualOutput = fib(n);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

n = 4;
expectedOutput = 3;
actualOutput = fib(n);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);
