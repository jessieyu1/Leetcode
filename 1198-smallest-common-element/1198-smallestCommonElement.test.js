const areSentenceSimilar = require("./1198-smallestCommonElement");

//Test Case 1:
let mat = [
  [1, 2, 3, 4, 5],
  [2, 4, 5, 8, 10],
  [3, 5, 7, 9, 11],
  [1, 3, 5, 7, 9],
];

let expectedOutput = 5;
let actualOutput = areSentenceSimilar(mat);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

//Test Case 2:
mat = [
  [1, 2, 3],
  [2, 3, 4],
  [2, 3, 5],
];
expectedOutput = 2;
actualOutput = areSentenceSimilar(mat);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);
