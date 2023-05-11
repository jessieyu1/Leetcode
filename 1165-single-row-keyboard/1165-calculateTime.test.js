const calculateTime = require("./1165-calculateTime");

// Test case 1
let keyboard = "abcdefghijklmnopqrstuvwxyz";
let word = "cba";
let expectedOutput = 4;
let actualOutput = calculateTime(keyboard, word);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

//Test case 2
keyboard = "pqrstuvwxyzabcdefghijklmno";
word = "leetcode";
expectedOutput = 73;
actualOutput = calculateTime(keyboard, word);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);
