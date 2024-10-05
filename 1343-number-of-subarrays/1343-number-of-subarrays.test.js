const numOfSubarrays = require("./1343-number-of-subarrays");

// Test case 1
let arr = [2,2,2,2,5,5,5,8] 
let k = 3
let threshold = 4
let expectedOutput = 3;
let actualOutput = numOfSubarrays(arr, k, threshold);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput}`
);

//Test case 2
arr = [11,13,17,23,29,31,7,5,2,3]
k = 3
threshold = 5
expectedOutput = 6;
actualOutput = numOfSubarrays(arr, k, threshold);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput}`
);

