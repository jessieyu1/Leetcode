// Import the function to test
const searchInsert = require("./0035-search-insert-position");

// Test case 1
let nums = [1, 3, 5, 6];
let target = 5;
let expectedOutput = 2;
let actualOutput = searchInsert(nums, target);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${actualOutput} instead`
);
// Test case 2
nums = [1, 3, 5, 6];
target = 2;
expectedOutput = 1;
actualOutput = searchInsert(nums, target);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${actualOutput} instead`
);

// Test case 3
nums = [1, 3, 5, 6];
target = 7;
expectedOutput = 4;
actualOutput = searchInsert(nums, target);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${actualOutput} instead`
);
// Test case 4
nums = [1, 3];
target = 2;
expectedOutput = 1;
actualOutput = searchInsert(nums, target);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${actualOutput} instead`
);
