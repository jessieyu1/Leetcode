const reverseWords = require('./0151-reverse-words-in-a-string');

let s = "the sky is blue";

let actualOutput = reverseWords(s);

console.assert(actualOutput === "blue is sky the", `Expected test case 1 to be "blue is sky the", but got ${actualOutput} instead`);

s = "  hello world!  ";

actualOutput = reverseWords(s);

console.assert(actualOutput === "world! hello", `Expected test case 2 to be "world! hello", but got ${actualOutput} instead`);

s = "a good   example";

actualOutput = reverseWords(s);

console.assert(actualOutput === "example good a", `Expected test case 3 to be "example good a", but got ${actualOutput} instead`);
