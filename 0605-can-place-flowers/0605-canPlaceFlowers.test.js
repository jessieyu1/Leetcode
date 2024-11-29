const canPlaceFlowers = require("./0605-canPlaceFlowers");

let flowerbed = [1, 0, 0, 0, 1];
let n = 1;
let expectedOutput = true;
let actualOutput = canPlaceFlowers(flowerbed, n);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

flowerbed = [1, 0, 0, 0, 1];
n = 2;
expectedOutput = false;
actualOutput = canPlaceFlowers(flowerbed, n);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);
