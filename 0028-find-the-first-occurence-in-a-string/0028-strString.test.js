const strString = require("./0028-strString");

//test case 1
let haystack = "sadbutsad";
let needle = "sad";
let expectedOutput = 0;
let actualOutput = strString(haystack, needle);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

//test case 2
haystack = "leetcode";
needle = "leeto";
expectedOutput = -1;
actualOutput = strString(haystack, needle);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

//test case 3
haystack = "a";
needle = "a";
expectedOutput = 0;
actualOutput = strString(haystack, needle);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);

//test case 4
haystack = "abc";
needle = "c";
expectedOutput = 2;
actualOutput = strString(haystack, needle);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test 4 to be ${expectedOutput}, but got ${actualOutput} instead`
);
