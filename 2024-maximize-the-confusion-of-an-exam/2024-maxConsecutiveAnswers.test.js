const maxConsecutiveAnswers = require("./2024-maxConsecutiveAnswers");

let answerKey = "TTFF";
let k = 4;
let expectedOutput = 2;
let actualOutput = maxConsecutiveAnswers(answerKey, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

answerKey = "TFFT";
k = 1;
expectedOutput = 3;
actualOutput = maxConsecutiveAnswers(answerKey, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

answerKey = "TTFTTFTT";
k = 1;
expectedOutput = 5;
actualOutput = maxConsecutiveAnswers(answerKey, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);
