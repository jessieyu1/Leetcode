const singleNumber = require("./0136-singleNumber");

//test case 1
let nums = [2, 2, 1];
let expectedOutput = 1;
let actualOutput = singleNumber(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be${expectedOutput}, but got ${actualOutput} instead`
);
//test case 2
nums = [4, 1, 2, 1, 2];
expectedOutput = 4;
actualOutput = singleNumber(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

//test case 3
nums = [1];
expectedOutput = 1;
actualOutput = singleNumber(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be${expectedOutput}, but got ${actualOutput} instead`
);
