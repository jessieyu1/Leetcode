const generate = require("./0118-Pascal'sTriangle");

//test case 1
let numRows = 5;
let expectedOutput = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
let actualOutput = generate(numRows);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 ${expectedOutput}, but got ${actualOutput} instead`
);
//test case 2
numRows = 1;
expectedOutput = [[1]];
actualOutput = generate(numRows);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 ${expectedOutput}, but got ${actualOutput} instead`
);
