const findMaxAverage = require("./0643-find-max-average");

//test case 1
let nums = [1, 12, -5, -6, 50, 3];
let k = 4;
let expectedOutput = 12.75;
let actualOutput = findMaxAverage(nums, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);
