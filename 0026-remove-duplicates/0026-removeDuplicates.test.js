const removeDuplicates = require("./0026-removeDuplicates.js");

//Test case 1
let nums = [1, 1, 2];
let expectedOutput = [1, 2];
let actualOutput = removeDuplicates(nums);

console.assert(
  actualOutput === expectedOutput.length,
  `Expected test case 1 to be ${expectedOutput.length}, but got ${actualOutput} instead`
);
for (let i = 0; i < actualOutput; i++) {
  console.assert(
    nums[i] === expectedOutput[i],
    `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
  );
}
//Test case 2
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
expectedOutput = [0, 1, 2, 3, 4];
actualOutput = removeDuplicates(nums);

console.assert(
  actualOutput === expectedOutput.length,
  `Expected test case 2 to be ${expectedOutput.length}, but got ${actualOutput} instead`
);
for (let i = 0; i < actualOutput; i++) {
  console.assert(
    nums[i] === expectedOutput[i],
    `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
  );
}
