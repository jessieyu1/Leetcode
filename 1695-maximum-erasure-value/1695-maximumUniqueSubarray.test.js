const maximumUniqueSubarray = require('./1695-maximumUniqueSubarray');

let nums = [4,2,4,5,6];
let expectedOutput = 17;
let actualOutput = maximumUniqueSubarray(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [5,2,1,2,5,2,1,2,5];
expectedOutput = 8;
actualOutput = maximumUniqueSubarray(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);