const countSubarrays = require('./2962-countSubarrays')

let nums = [1,3,2,3,3];
let k = 2;
let expectedOutput = 6;
let actualOutput = countSubarrays(nums, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [1,4,2,1];
k = 2;
expectedOutput = 0;
actualOutput = countSubarrays(nums, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);