const reverseWords = require("./0186-reverseWord");
//test case 1
let s = [
  "t",
  "h",
  "e",
  " ",
  "s",
  "k",
  "y",
  " ",
  "i",
  "s",
  " ",
  "b",
  "l",
  "u",
  "e",
];
let expectedOutput = [
  "b",
  "l",
  "u",
  "e",
  " ",
  "i",
  "s",
  " ",
  "s",
  "k",
  "y",
  " ",
  "t",
  "h",
  "e",
];
let actualOutput = reverseWords(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

// test case 2
s = ["a"];
expectedOutput = ["a"];
actualOutput = reverseWords(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);
