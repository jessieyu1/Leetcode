const increasingTriplet = require('./0334-increasingTriplet')

// Test case 1
let nums = [1,2,3,4,5];
let expectedOutput = true;
let actualOutput = increasingTriplet(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

// Test case 2
nums = [5,4,3,2,1];
expectedOutput = false
actualOutput = increasingTriplet(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

// Test case 3
nums = [2,1,5,0,4,6];
expectedOutput = true;
actualOutput = increasingTriplet(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);

// Test case 4
nums = [1,2,1,3];
expectedOutput = true;
actualOutput = increasingTriplet(nums);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 4 to be ${expectedOutput}, but got ${actualOutput} instead`
);