const isHappy = require("./0202-happyNumber");

//test case 1
let n = 19;
let expectedOutput = true;
let actualOutput = isHappy(n);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);
//test case 2
n = 2;
expectedOutput = false;
actualOutput = isHappy(n);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);
