const maxProfit = require("./0121-maxProfit");

//test case 1
let prices = [7, 1, 5, 3, 6, 4];
let expectedOutput = 5;
let actualOutput = maxProfit(prices);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 ${expectedOutput}, but got ${actualOutput} instead`
);
//test case 2
prices = [7, 6, 4, 3, 1];
expectedOutput = 0;
actualOutput = maxProfit(prices);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 ${expectedOutput}, but got ${actualOutput} instead`
);
