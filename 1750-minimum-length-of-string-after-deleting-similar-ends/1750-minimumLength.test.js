const minimumLength = require('./1750-minimumLength');

let s = "ca";
let expectedOutput = 2;
let actualOutput = minimumLength(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

s = "cabaabac";
expectedOutput = 0;
actualOutput = minimumLength(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);


// s = "aabccabba";
// expectedOutput = 3;
// actualOutput = minimumLength(s);
// console.assert(
//   JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
//   `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
// );
