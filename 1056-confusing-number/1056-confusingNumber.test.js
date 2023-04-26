const confusingNumber = require("./1056-confusingNumber");

// Test case 1
let n = 6;
let expectedOutput = true;
let actualOutput = confusingNumber(n);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

// Test case 2
n = 89;
expectedOutput = true;
actualOutput = confusingNumber(n);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

// Test case 3
n = 11;
expectedOutput = false;
actualOutput = confusingNumber(n);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);

// Test case 4
n = 916;
expectedOutput = false;
actualOutput = confusingNumber(n);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 4 to be ${expectedOutput}, but got ${actualOutput} instead`
);
