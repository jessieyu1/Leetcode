const search = require("./0704-binary-search.js");

let nums = [1, 2, 3, 4, 5, 6, 7];

let target = 5;

let expectedOutput = 4;

let actualOutput = search(nums, target);

console.assert(
    JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
    `Expected search(${nums}, ${target}) to be ${expectedOutput}, but got ${actualOutput} instead`
    );
