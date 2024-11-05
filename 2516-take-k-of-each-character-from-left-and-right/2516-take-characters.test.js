const takeCharacters = require('./2516-take-characters');

let s = "aabaaaacaabc"
let k = 2
let expectedOutput = 8;
let actualOutput = takeCharacters(s, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

s = "a"
k = 1
expectedOutput = -1;
actualOutput = takeCharacters(s, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);