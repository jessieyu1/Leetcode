const maxFrequency = require('./1838-maxFrequency');

let nums = [1,2,4]
let k = 5
let expectedOutput = 3;
let actualOutput = maxFrequency(nums, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [1,4,8,13]
k = 5
expectedOutput = 2;
actualOutput = maxFrequency(nums, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [3,9,6]
k = 2
expectedOutput = 1;
actualOutput = maxFrequency(nums, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);