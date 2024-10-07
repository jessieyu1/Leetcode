const sum = require("./2235-sum.js");

let num1 = 12;
let num2 = 5;
let expectedOutput = 17;
let actualOutput = sum(num1, num2);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

num1 = -10;
num2 = 4;
expectedOutput = -6;
actualOutput = sum(num1, num2);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);
