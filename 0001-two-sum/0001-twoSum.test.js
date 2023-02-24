// Import the function to test
const twoSum = require("./0001-twoSum");

// Test case 1
let nums = [2, 7, 11, 15];
let target = 9;
let expectedOutput = [0, 1];
let actualOutput = twoSum(nums, target);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${actualOutput} instead`
);

// Test case 2
nums = [3, 2, 4];
target = 6;
expectedOutput = [1, 2];
actualOutput = twoSum(nums, target);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${actualOutput} instead`
);

// Test case 3
nums = [3, 3];
target = 6;
expectedOutput = [0, 1];
actualOutput = twoSum(nums, target);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${actualOutput} instead`
);

// Test case 4
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
target = 17;
expectedOutput = [7, 8];
actualOutput = twoSum(nums, target);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${actualOutput} instead`
);

// Test case 5
nums = [1, 2, 3];
target = 4;
expectedOutput = [0, 2];
actualOutput = twoSum(nums, target);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${actualOutput} instead`
);
