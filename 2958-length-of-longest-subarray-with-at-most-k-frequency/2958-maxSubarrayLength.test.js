const maxSubarrayLength = require("./2958-maxSubarrayLength");

let nums = [1, 2, 3, 1, 2, 3, 1, 2];
let k = 2;
let expectedOutput = 6;
let actualOutput = maxSubarrayLength(nums, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [1, 2, 1, 2, 1, 2, 1, 2];
k = 1;
expectedOutput = 2;
actualOutput = maxSubarrayLength(nums, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [5, 5, 5, 5, 5, 5, 5];
k = 4;
expectedOutput = 4;
actualOutput = maxSubarrayLength(nums, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);
