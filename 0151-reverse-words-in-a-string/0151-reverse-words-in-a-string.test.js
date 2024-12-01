const reverseWords = require("./0151-reverse-words-in-a-string");

let s = "the sky is blue";
let expectedOutput = "blue is sky the";
let actualOutput = reverseWords(s);

console.assert(
  actualOutput === expectedOutput,
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

s = "  hello world!  ";

actualOutput = reverseWords(s);
expectedOutput = "world! hello";
console.assert(
  actualOutput === expectedOutput,
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

s = "a good   example";
actualOutput = reverseWords(s);
expectedOutput = "example good a";
console.assert(
  actualOutput === expectedOutput,
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);
