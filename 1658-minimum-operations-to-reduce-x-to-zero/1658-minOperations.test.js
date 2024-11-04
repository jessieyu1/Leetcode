const minOperations = require('./1658-minOperations');

let nums = [1,1,4,2,3]
let x = 5
let expectedOutput = 2;
let actualOutput = minOperations(nums, x);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [5,6,7,8,9]
x = 4
expectedOutput = -1;
actualOutput = minOperations(nums, x);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [3,2,20,1,1,3]
x = 10
expectedOutput = 5;
actualOutput = minOperations(nums, x);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);