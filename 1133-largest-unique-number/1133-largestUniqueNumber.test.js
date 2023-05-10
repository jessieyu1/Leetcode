const largestUniqueNumber = require("./1133-largestUniqueNumber");

//test case 1
let nums = [5, 7, 3, 9, 4, 9, 8, 3, 1];
let expectedOutput = 8;
let actualOutput = largestUniqueNumber(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead.`
);

//test case 2
nums = [9, 9, 8, 8];
expectedOutput = -1;
actualOutput = largestUniqueNumber(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead.`
);

//test case 3
nums = [11, 10, 11];
expectedOutput = 10;
actualOutput = largestUniqueNumber(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead.`
);

//test case 4
nums = [99];
expectedOutput = 99;
actualOutput = largestUniqueNumber(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 4 to be ${expectedOutput}, but got ${actualOutput} instead.`
);
