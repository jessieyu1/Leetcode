//Import function to test
const reverseString = require("./0344-reverseString");

// Test case 1
let s = ["h", "e", "l", "l", "o"];
let expectedOutput = ["o", "l", "l", "e", "h"];
let actualOutput = reverseString(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);
// Test case 2
s = ["H", "a", "n", "n", "a", "h"];
expectedOutput = ["h", "a", "n", "n", "a", "H"];
actualOutput = reverseString(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

// Test case 3
s = ["H"];
expectedOutput = ["H"];
actualOutput = reverseString(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);
