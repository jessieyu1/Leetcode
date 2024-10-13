const maxSum = require('./2841-maxSum');

let nums = [2,6,7,3,1,7];
let m = 3;
let k = 4;
let expectedOutput = 18;
let actualOutput = maxSum(nums, m, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [5,9,9,2,4,5,4];
m = 1;
k = 3;
expectedOutput = 23;
actualOutput = maxSum(nums, m, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [1,2,1,2,1,2,1];
m = 3;
k = 3;
expectedOutput = 0;
actualOutput = maxSum(nums, m, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [1,1,1,3];
m = 2;
k = 2;
expectedOutput = 4;
actualOutput = maxSum(nums, m, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 4 to be ${expectedOutput}, but got ${actualOutput} instead`
);