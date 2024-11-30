const reverseVowels = require("./0345-reverseVowels");

let s = "IceCreAm";
let expectedOutput = "AceCreIm";
let actualOutput = reverseVowels(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

s = "leetcode";
expectedOutput = "leotcede";
actualOutput = reverseVowels(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);
