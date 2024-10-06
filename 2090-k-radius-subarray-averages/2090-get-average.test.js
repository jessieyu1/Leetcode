const getAverage = require("./2090-get-average");

// Test case 1
let nums = [7,4,3,9,1,8,5,2,6] 
let k = 3
let expectedOutput = [-1,-1,-1,5,4,4,-1,-1,-1];
let actualOutput = getAverage(nums, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput}`
);

// Test case 2
nums =  [100000];
k = 0
expectedOutput = [100000];
actualOutput = getAverage(nums, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput}`
);

// Test case 3
nums =  [0];
k = 100000;
expectedOutput = [-1];
actualOutput = getAverage(nums, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput}`
);