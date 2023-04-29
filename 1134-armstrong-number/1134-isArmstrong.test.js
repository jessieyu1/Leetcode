const isArmstrong = require("./1134-isArmstrong");

// Test case 1
let n = 153;
let expectedOutput = true;
let actualOutput = isArmstrong(n);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

// Test case 2
n = 123;
expectedOutput = false;
actualOutput = isArmstrong(n);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);
