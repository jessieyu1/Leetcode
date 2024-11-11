const countSubarrays = require('./2302-countSubarrays');

let nums = [2,1,4,3,5];
let k = 10;
let expectedOutput = 6;
let actualOutput = countSubarrays(nums, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

nums =  [1,1,1];
k = 5;
expectedOutput = 5;
actualOutput = countSubarrays(nums, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2  to be ${expectedOutput}, but got ${actualOutput} instead`
);