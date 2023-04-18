const secondHighest = require("./1796-secondHighest.js");

let s = "dfa12321afd";
let expectedOutput = 2;
let actualOutput = secondHighest(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

s = "abc1111";
expectedOutput = -1;
actualOutput = secondHighest(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);
