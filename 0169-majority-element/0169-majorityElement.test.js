const majorityElement = require("./0169-majorityElement");

//test case 1
let nums = [3, 2, 3];
let expectedOutput = 3;
let actualOutput = majorityElement(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be${expectedOutput}, but got ${actualOutput} instead`
);
//test case 2
nums = [2, 2, 1, 1, 1, 2, 2];
expectedOutput = 2;
actualOutput = majorityElement(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

//test case 3
nums = [1];
expectedOutput = 1;
actualOutput = majorityElement(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be${expectedOutput}, but got ${actualOutput} instead`
);
