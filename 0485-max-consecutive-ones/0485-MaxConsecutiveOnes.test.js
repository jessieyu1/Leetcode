const maxOnes = require("./0485-MaxConsecutiveOnes");

let nums = [1, 1, 0, 1, 1, 1];
let expectedOutput = 3;
let actualOutput = maxOnes(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [1, 0, 1, 1, 0, 1];
expectedOutput = 2;
actualOutput = maxOnes(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${actualOutput} instead`
);
