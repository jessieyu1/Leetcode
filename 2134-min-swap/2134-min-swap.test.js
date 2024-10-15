const minSwap = require('./2134-min-swap');

let nums = [0,1,0,1,1,0,0];
let expectedOutput = 1;
let actualOutput = minSwap(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [0,1,1,1,0,0,1,1,0];
expectedOutput = 2;
actualOutput = minSwap(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

nums = [1,1,0,0,1]
expectedOutput = 0;
actualOutput = minSwap(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);