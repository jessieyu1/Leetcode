const mergeAlternately = require('./1768-mergeAlternately')

let word1 = "abc";
let word2 = "pqr";
let expectedOutput = "apbqcr";
let actualOutput = mergeAlternately(word1, word2);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

word1 = "ab";
word2 = "pqrs";
expectedOutput = "apbqrs";
actualOutput = mergeAlternately(word1, word2);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

word1 = "abcd";
word2 = "pq";
expectedOutput = "apbqcd";
actualOutput = mergeAlternately(word1, word2);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);