//Import function to test
const moveZeros = require("./0283-moveZeros");

// Test case 1
let nums = [0, 1, 0, 3, 12];
let expectedOutput = [1, 3, 12, 0, 0];
let actualOutput = moveZeros(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);
// Test case 2
nums = [0];
expectedOutput = [0];
actualOutput = moveZeros(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);
