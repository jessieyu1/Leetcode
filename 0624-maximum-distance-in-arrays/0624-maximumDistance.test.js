const maximumDistance = require("./0624-maximumDistance");

//test case 1
let arrays = [
  [1, 2, 3],
  [4, 5],
  [1, 2, 3],
];
let expectedOutput = 4;
let actualOutput = maximumDistance(arrays);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

//test case 2
arrays = [[1], [1]];
expectedOutput = 0;
actualOutput = maximumDistance(arrays);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

//test case 3
arrays = [
  [1, 4],
  [0, 5],
];
expectedOutput = 4;
actualOutput = maximumDistance(arrays);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);
