const findPeakElement = require("./0162-find-peak-element");

let nums = [1, 2, 3, 1];
let expectedOutput = 2;

let actualOutput = findPeakElement(nums);

console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [1, 2, 1, 3, 5, 6, 4];

expectedOutput = 5;

actualOutput = findPeakElement(nums);

console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

expectedOutput = 14;

actualOutput = findPeakElement(nums);

console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [2, 1];

expectedOutput = 0;
actualOutput = findPeakElement(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [1, 2,1,3,4,6,7];

expectedOutput = 6;
actualOutput = findPeakElement(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${actualOutput} instead`
);