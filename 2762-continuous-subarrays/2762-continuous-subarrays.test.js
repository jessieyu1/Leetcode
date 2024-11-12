const continuousSubarrays = require('./2762-continuous-subarrays');

let nums = [5,4,2,4];
let expectedOutput = 8;
let actualOutput = continuousSubarrays(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [1,2,3];
expectedOutput = 6;
actualOutput = continuousSubarrays(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);