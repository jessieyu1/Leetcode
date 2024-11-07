const longestEqualSubarray = require('./2831-longestEqualSubarray');

let nums = [1,3,2,3,1,3]
let k = 3;
let expectedOutput = 3;
let actualOutput = longestEqualSubarray(nums, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

nums =  [1,1,2,2,1,1]
k = 2;
expectedOutput = 4;
actualOutput = longestEqualSubarray(nums, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);