const minimumRefill = require('./2105-minimumRefill');

let plants = [2,2,3,3];
let capacityA = 5;
let capacityB = 5;
let expectedOutput = 1;
let actualOutput = minimumRefill(plants, capacityA, capacityB);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput}`
);

plants = [2,2,3,3];
capacityA = 3;
capacityB = 4;
expectedOutput = 2;
actualOutput = minimumRefill(plants, capacityA, capacityB);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput}`
);