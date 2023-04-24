const findMissingRangers = require("./0163-missingRanges");

//test case 1
let nums = [0, 1, 3, 50, 75];
let lower = 0;
let upper = 99;
let expectedOutput = [
  [2, 2],
  [4, 49],
  [51, 74],
  [76, 99],
];
let actualOutput = findMissingRangers(nums, lower, upper);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be${expectedOutput}, but got ${actualOutput} instead`
);

//test case 2
nums = [-1];
lower = -1;
upper = -1;
expectedOutput = [];
actualOutput = findMissingRangers(nums, lower, upper);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be${expectedOutput}, but got ${actualOutput} instead`
);

//test case 3
nums = [];
lower = 1;
upper = 1;
expectedOutput = [[1, 1]];
actualOutput = findMissingRangers(nums, lower, upper);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be${expectedOutput}, but got ${actualOutput} instead`
);
