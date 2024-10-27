const longestSemiRepetitiveSubstring = require('./2730-longestSemiRepetitiveSubstring');

let s = "52233";
let expectedOutput = 4;
let actualOutput = longestSemiRepetitiveSubstring(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

s = "5494";
expectedOutput = 4;
actualOutput = longestSemiRepetitiveSubstring(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);