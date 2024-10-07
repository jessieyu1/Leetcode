const distanceTraveled = require('./2739-distance-traveled');

let mainTank = 5;
let additionalTank = 10;
let expectedOutput = 60;
let actualOutput = distanceTraveled(mainTank, additionalTank);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

mainTank = 1;
additionalTank = 2;
expectedOutput = 10;
actualOutput = distanceTraveled(mainTank, additionalTank);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);