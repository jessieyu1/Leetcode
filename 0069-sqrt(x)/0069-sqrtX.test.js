const mySqrt = require("./0069-sqrtX");

// Test case 1
let x = 4;
let expectedOutput = 2;
let actualOutput = mySqrt(x);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 ${expectedOutput}, but got ${actualOutput} instead`
);

// Test case 2
x = 8;
expectedOutput = 2;
actualOutput = mySqrt(x);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 ${expectedOutput}, but got ${actualOutput} instead`
);
