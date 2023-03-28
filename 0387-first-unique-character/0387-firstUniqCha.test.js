//Import function to test
const firstUniqChar = require("./0387-firstUniqCha");

// Test case 1
let s = "leetcode";
let expectedOutput = 0;
let actualOutput = firstUniqChar(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);
// Test case 2
s = "loveleetcode";
expectedOutput = 2;
actualOutput = firstUniqChar(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

// Test case 3
s = "aabb";
expectedOutput = -1;
actualOutput = firstUniqChar(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);
