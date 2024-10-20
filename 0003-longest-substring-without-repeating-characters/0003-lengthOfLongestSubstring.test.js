const lengthOfLongestSubstring = require('./0003-lengthOfLongestSubstring');

//test case 1
let s = "abcabcbb";
let expectedOutput = 3;
let actualOutput = lengthOfLongestSubstring(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test 1 ${expectedOutput}, but got ${actualOutput} instead`
);

//test case 2
s = "bbbbb";
expectedOutput = 1;
actualOutput = lengthOfLongestSubstring(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test 2 ${expectedOutput}, but got ${actualOutput} instead`
);

//test case 3
s = "pwwkew";
expectedOutput = 3;
actualOutput = lengthOfLongestSubstring(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test 3 ${expectedOutput}, but got ${actualOutput} instead`
);