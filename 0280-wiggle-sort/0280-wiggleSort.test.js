const wiggleSort = require("./0280-wiggleSort");

//TODO: adjust test cases to be more accurate

// Test case 1
let nums = [3, 5, 2, 1, 6, 4];
let expectedOutput = [1, 3, 2, 5, 4, 6];
let actualOutput = wiggleSort(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

// Test case 2
nums = [6, 6, 5, 6, 3, 8];
expectedOutput = [3, 6, 5, 6, 6, 8];
actualOutput = wiggleSort(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

// Test case 3
nums = [0];
expectedOutput = [0];
actualOutput = wiggleSort(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);

// Test case 4
nums = [1, 1, 1];
expectedOutput = [1, 1, 1];
actualOutput = wiggleSort(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 4 to be ${expectedOutput}, but got ${actualOutput} instead`
);
