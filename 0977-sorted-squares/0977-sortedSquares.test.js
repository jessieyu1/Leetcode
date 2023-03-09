const sortedSquares = require("./0977-sortedSquares");

// Test case 1
let nums = [-4, -1, 0, 3, 10];
let expectedOutput = [0, 1, 9, 16, 100];
let actualOutput = sortedSquares(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${actualOutput} instead`
);
// Test case 2
nums = [-7, -3, 2, 3, 11];
expectedOutput = [4, 9, 9, 49, 121];
actualOutput = sortedSquares(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${actualOutput} instead`
);
