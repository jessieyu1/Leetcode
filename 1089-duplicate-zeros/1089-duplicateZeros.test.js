const duplicateZeros = require("./1089-duplicateZeros");

// Test case 1
let nums = [1, 0, 2, 3, 0, 4, 5, 0];
let expectedOutput = [1, 0, 0, 2, 3, 0, 0, 4];
duplicateZeros(nums);
console.assert(
  JSON.stringify(nums) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${nums}`
);
// Test case 2
nums = [1, 2, 3];
expectedOutput = [1, 2, 3];
duplicateZeros(nums);
console.assert(
  JSON.stringify(nums) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${nums}`
);
// Test case 3
nums = [8, 4, 5, 0, 0, 0, 0, 7];
expectedOutput = [8, 4, 5, 0, 0, 0, 0, 0];
duplicateZeros(nums);
console.assert(
  JSON.stringify(nums) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${nums}`
);
