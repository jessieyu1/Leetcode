const longestCommonPrefix = require("./0014-longestCommonPrefix");

//test case 1
let strs = ["flower", "flow", "flight"];
let expectedOutput = "fl";
let actualOutput = longestCommonPrefix(strs);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${actualOutput} instead`
);
//test case 2
strs = ["dog", "racecar", "car"];
expectedOutput = "";
actualOutput = longestCommonPrefix(strs);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${actualOutput} instead`
);
