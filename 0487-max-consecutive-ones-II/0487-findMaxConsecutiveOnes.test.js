const findMaxConsecutiveOnes = require("./0487-findMaxConsecutiveOnes");

//Test Case 1:
let nums = [1, 0, 1, 1, 0];
let expectedOutput = 4;
let actualOutput = findMaxConsecutiveOnes(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

//Test Case 2:
nums = [1, 0, 1, 1, 0, 1];
expectedOutput = 4;
actualOutput = findMaxConsecutiveOnes(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

//Test Case 3:
nums = [1];
expectedOutput = 1;
actualOutput = findMaxConsecutiveOnes(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);

//Test Case 4:
nums = [0];
expectedOutput = 1;
actualOutput = findMaxConsecutiveOnes(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 4 to be ${expectedOutput}, but got ${actualOutput} instead`
);
