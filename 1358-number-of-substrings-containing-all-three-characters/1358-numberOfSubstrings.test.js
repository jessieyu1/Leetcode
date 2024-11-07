const numberOfSubstrings = require('./1358-numberOfSubstrings');


let s = "abcabc"
let expectedOutput = 10;
let actualOutput = numberOfSubstrings(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

s = "aaacb"
expectedOutput = 3;
actualOutput = numberOfSubstrings(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

s = "abc"
expectedOutput = 1;
actualOutput = numberOfSubstrings(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);