const maxVowels = require("./1456-max-vowels");

let s = "abciiidef";
let k = 3;
let expectedOutput = 3;
let actualOutput = maxVowels(s, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

s = "aeiou";
k = 2
expectedOutput = 2;
actualOutput = maxVowels(s, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

s = "weallloveyou";
k = 7;
expectedOutput = 4;
actualOutput = maxVowels(s, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);

s = "tryhard";
k = 4;
expectedOutput = 1;
actualOutput = maxVowels(s, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 4 to be ${expectedOutput}, but got ${actualOutput} instead`
);

