const maximumLengthSubstring = require('./3090-maximumLengthSubstring');

let s = "bcbbbcba";
let expectedOutput = 4;
let actualOutput = maximumLengthSubstring(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

s = "aaaa";
expectedOutput = 2;
actualOutput = maximumLengthSubstring(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

