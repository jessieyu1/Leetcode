const equalSubstring = require("./1208-equalSubstring");

let s = "abcd";
let t = "bcdf";
let maxCost = 3;
let expectedOutput = 3;
let actualOutput = equalSubstring(s, t, maxCost);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

s = "abcd";
t = "cdef";
maxCost = 3;
expectedOutput = 1;
actualOutput = equalSubstring(s, t, maxCost);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

s = "abcd";
t = "acde";
maxCost = 0;
expectedOutput = 1;
actualOutput = equalSubstring(s, t, maxCost);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);
