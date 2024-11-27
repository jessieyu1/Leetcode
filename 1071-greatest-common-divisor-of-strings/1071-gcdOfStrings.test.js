const gcdOfStrings = require('./1071-gcdOfStrings');

let str1 = "ABCABC";
let str2 = "ABC"
let expectedOutput = "ABC"
let actualOutput = gcdOfStrings(str1, str2);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

str1 = "ABABAB";
str2 = "ABAB";
expectedOutput = "AB"
actualOutput = gcdOfStrings(str1, str2);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);