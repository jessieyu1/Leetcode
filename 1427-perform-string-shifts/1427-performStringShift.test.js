const performStringShift = require("./1427-performStringShift");

// Test case 1
let s = "abc";
let shift = [
  [0, 1],
  [1, 2],
];
let expectedOutput = "cab";
let actualOutput = performStringShift(s, shift);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

// Test case 2
s = "abcdefg";
shift = [
  [1, 1],
  [1, 1],
  [0, 2],
  [1, 3],
];
expectedOutput = "efgabcd";
actualOutput = performStringShift(s, shift);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

// Test case 3
s = "xqgwkiqpif";
shift = [
  [1, 4],
  [0, 7],
  [0, 8],
  [0, 7],
  [0, 6],
  [1, 3],
  [0, 1],
  [1, 7],
  [0, 5],
  [0, 6],
];
expectedOutput = "qpifxqgwki";
actualOutput = performStringShift(s, shift);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);
