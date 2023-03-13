const climbingStairs = require("./0070-climbingStairs");

//test case 1
let n = 2;
let expectedOutput = 2;
let actualOutput = climbingStairs(n);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 ${expectedOutput}, but got ${actualOutput} instead`
);
//test case 2
n = 3;
expectedOutput = 3;
actualOutput = climbingStairs(n);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 ${expectedOutput}, but got ${actualOutput} instead`
);
