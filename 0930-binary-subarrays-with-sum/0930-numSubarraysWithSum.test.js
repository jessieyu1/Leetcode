const numSubarraysWithSum = require('./0930-numSubarraysWithSum');

let nums = [1,0,1,0,1];
let goal = 2;
let expectedOutput = 4;
let actualOutput = numSubarraysWithSum(nums, goal);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [0,0,0,0,0];
goal = 0;
expectedOutput = 15;
actualOutput = numSubarraysWithSum(nums, goal);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);