const runningSum = require("./1480-runningSum");

let nums = [1, 2, 3, 4];
let expectedOutput = [1, 3, 6, 10];
let actualOutput = runningSum(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [1, 1, 1, 1, 1];
expectedOutput = [1, 2, 3, 4, 5];
actualOutput = runningSum(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [3, 1, 2, 10, 1];
expectedOutput = [3, 4, 6, 16, 17];
actualOutput = runningSum(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);
