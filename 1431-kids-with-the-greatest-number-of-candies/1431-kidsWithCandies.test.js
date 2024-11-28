const kidsWithCandies = require("./1431-kidsWithCandies");

let candies = [2, 3, 5, 1, 3];
let extraCandies = 3;
let expectedOutput = [true, true, true, false, true];
let actualOutput = kidsWithCandies(candies, extraCandies);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

candies = [4, 2, 1, 1, 2];
extraCandies = 1;
expectedOutput = [true, false, false, false, false];
actualOutput = kidsWithCandies(candies, extraCandies);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

candies = [12, 1, 12];
extraCandies = 10;
expectedOutput = [true, false, true];
actualOutput = kidsWithCandies(candies, extraCandies);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);
