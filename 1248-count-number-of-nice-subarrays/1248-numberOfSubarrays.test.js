const numberOfSubarrays = require('./1248-numberOfSubarrays');

let nums = [1,1,2,1,1];
let k = 3
let expectedOutput = 2;
let actualOutput = numberOfSubarrays(nums, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [2,4,6];
k = 1;
expectedOutput = 0;
actualOutput = numberOfSubarrays(nums, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [2,2,2,1,2,2,1,2,2,2];
k = 2;
expectedOutput = 16;
actualOutput = numberOfSubarrays(nums, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);