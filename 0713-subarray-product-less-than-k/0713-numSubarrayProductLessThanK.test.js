const numSubarrayProductLessThanK = require("./0713-numSubarrayProductLessThanK");

let nums = [10, 5, 2, 6];
let k = 100;
let expectedOutput = 8;
let actualOutput = numSubarrayProductLessThanK(nums, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [1, 2, 3];
k = 0;
expectedOutput = 0;
actualOutput = numSubarrayProductLessThanK(nums, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);
s