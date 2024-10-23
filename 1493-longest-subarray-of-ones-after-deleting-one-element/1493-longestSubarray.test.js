const longestSubarray = require("./1493-longestSubarray");

let nums = [1, 1, 0, 1];
let expectedOutput = 3;
let actualOutput = longestSubarray(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [0, 1, 1, 1, 0, 1, 1, 0, 1];
expectedOutput = 5;
actualOutput = longestSubarray(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [1, 1, 1];
expectedOutput = 2;
actualOutput = longestSubarray(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);
