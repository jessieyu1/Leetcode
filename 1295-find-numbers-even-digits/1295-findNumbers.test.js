const findNumbers = require("./1295-findNumbers");

let nums = [12, 345, 2, 6, 7896];
let expectedOutput = 2;
let actualOutput = findNumbers(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [555, 901, 482, 1771];
expectedOutput = 1;
actualOutput = findNumbers(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);
