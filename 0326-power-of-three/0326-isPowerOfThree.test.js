//Import function to test
const isPowerOfThree = require("./0326-isPowerOfThree");

// Test case 1
let n = 27;
let expectedOutput = true;
let actualOutput = isPowerOfThree(n);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);
// Test case 2
n = 0;
expectedOutput = false;
actualOutput = isPowerOfThree(n);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

// Test case 3
n = -1;
expectedOutput = false;
actualOutput = isPowerOfThree(n);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);
