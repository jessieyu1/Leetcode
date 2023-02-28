const numberOfSteps = require("./1342-numberOfSteps");

// Test case 1
let num = 14;
let expectedOutput = 6;
let actualOutput = numberOfSteps(num);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${actualOutput}`
);

// Test case 2
num = 8;
expectedOutput = 4;
actualOutput = numberOfSteps(num);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${actualOutput}`
);
// Test case 3
num = 123;
expectedOutput = 12;
actualOutput = numberOfSteps(num);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${actualOutput}`
);
