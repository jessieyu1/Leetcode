const decrypt = require("./1652-defuse-the-bomb");

code = [5,7,1,4];
k = 3;
expectedOutput = [12,10,16,13];
actualOutput = decrypt(code, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

code = [1,2,3,4];
k = 0
expectedOutput = [0,0,0,0];
actualOutput = decrypt(code, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

code = [2,4,9,3];
k = -2;
expectedOutput = [12,5,6,13];
actualOutput = decrypt(code, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);

code = [10,5,7,7,3,2,10,3,6,9,1,6];
k = -4;
expectedOutput = [22,26,22,28,29,22,19,22,18,21,28,19];
actualOutput = decrypt(code, k);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);
