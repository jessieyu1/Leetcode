const maxSatisfied = require('./1052-max-satistifed');

let customers = [1,0,1,2,1,1,7,5]
let grumpy = [0,1,0,1,0,1,0,1]
let minutes = 3

let expectedOutput = 16;
let actualOutput = maxSatisfied(customers, grumpy, minutes);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

customers = [1]
grumpy = [0]
minutes = 1
expectedOutput = 1;
actualOutput = maxSatisfied(customers, grumpy, minutes);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);


customers = [9,10,4,5]
grumpy = [1,0,1,1]
minutes = 1
expectedOutput = 19;
actualOutput = maxSatisfied(customers, grumpy, minutes);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);