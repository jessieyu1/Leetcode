const anagramMappings = require("./0760-anagramMappings");

//test case 1
let nums1 = [12, 28, 46, 32, 50];
let nums2 = [50, 12, 32, 46, 28];
let expectedOutput = [1, 4, 3, 2, 0];
let actualOutput = anagramMappings(nums1, nums2);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

//test case 2
nums1 = [84, 46];
nums2 = [84, 46];
expectedOutput = [0, 1];
actualOutput = anagramMappings(nums1, nums2);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);
