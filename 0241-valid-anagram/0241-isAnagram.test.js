const isAnagram = require("./0241-isAnagram");

//test case 1
let s = "anagram";
let t = "nagaram";
let expectedOutput = true;
let actualOutput = isAnagram(s, t);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);
//test case 2
s = "rat";
t = "car";
expectedOutput = false;
actualOutput = isAnagram(s, t);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);
