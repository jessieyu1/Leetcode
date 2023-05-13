const canPermutePalindrome = require("./0266-palindrome-permutation");

//test case 1
let s = "code";
let expectedOutput = false;
let actualOutput = canPermutePalindrome(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);
//test case 2
s = "aab";
expectedOutput = true;
actualOutput = canPermutePalindrome(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

//test case 3
s = "carerac";
expectedOutput = true;
actualOutput = canPermutePalindrome(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);
