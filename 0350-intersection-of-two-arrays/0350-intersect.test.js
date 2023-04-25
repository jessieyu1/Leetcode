//Import function to test
const intersect = require("./0350-intersect");

// Test case 1
let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
let expectedOutput = [2, 2];
let actualOutput = intersect(nums1, nums2);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);
// Test case 2
nums1 = [4, 9, 5];
nums2 = [9, 4, 9, 8, 4];
expectedOutput1 = [4, 9];
expectedOutput2 = [9, 4];
actualOutput = intersect(nums1, nums2);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput1) ||
    JSON.stringify(actualOutput) === JSON.stringify(expectedOutput2),
  `Expected test case 2 to be ${expectedOutput1} or ${expectedOutput2}, but got ${actualOutput} instead`
);
