const reverseWords = require("./0557-reverseWords");

let s = "Let's take LeetCode contest";
let expectedOutput = "s'teL ekat edoCteeL tsetnoc";
let actualOutput = reverseWords(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

s = "God Ding";
expectedOutput = "doG gniD";
actualOutput = reverseWords(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);
