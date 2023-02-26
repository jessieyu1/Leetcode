//Import function to test
const containsDuplicate = require("./0217-containsDuplicate");

// Test case 1
let nums = [1, 2, 3, 1];
let expectedOutput = true;
let actualOutput = containsDuplicate(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${actualOutput} instead`
);
// Test case 2
nums = [1, 2, 3, 4];
expectedOutput = false;
actualOutput = containsDuplicate(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${actualOutput} instead`
);
// Test case 3
nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
expectedOutput = true;
actualOutput = containsDuplicate(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${actualOutput} instead`
);
