//Import function to test
const missingNumber = require("./0268-missingNumber");

// Test case 1
let nums = [3, 0, 1];
let expectedOutput = 2;
let actualOutput = missingNumber(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);
// Test case 2
nums = [0, 1];
expectedOutput = 2;
actualOutput = missingNumber(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);
// Test case 3
nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
expectedOutput = 8;
actualOutput = missingNumber(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);
