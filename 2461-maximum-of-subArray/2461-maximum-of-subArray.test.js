const maximumSubarraySum = require("./2461-maximum-of-subArray");

let nums = [1, 5, 4, 2, 9, 9, 9];
let k = 3;
let expectedOutput = 15;
let actualOutput = maximumSubarraySum(nums, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [4, 4, 4];
k = 3;
expectedOutput = 0;
actualOutput = maximumSubarraySum(nums, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);
