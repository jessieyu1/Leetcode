const isPalindrome = require('./0125-isPalindrome')

//test case 1
let s = "A man, a plan, a canal: Panama";
let expectedOutput = true;
let actualOutput = isPalindrome(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

//test case 2
s = "The chic gangster liked to start the day with a pink scarf.";
expectedOutput = false;
actualOutput = isPalindrome(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

//test case 3
s = " ";
expectedOutput = true;
actualOutput = isPalindrome(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);