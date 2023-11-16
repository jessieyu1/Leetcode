const reverseStr = require('./0541-reverse-string.js');

let input = 'abcdefg';
let k = 2;

let actualOutput = reverseStr(input, k);

console.assert(actualOutput === 'bacdfeg', `Expected test case 1 to be 'bacdfeg', but got ${actualOutput} instead`);

input = 'abcd';
k = 2;

actualOutput = reverseStr(input, k);

console.assert(actualOutput === 'bacd', `Expected test case 2 to be 'bacd', but got ${actualOutput} instead`);

input = 'abcdefg';
k = 8;

actualOutput = reverseStr(input, k);

console.assert(actualOutput === 'gfedcba', `Expected test case 3 to be 'gfedcba', but got ${actualOutput} instead`);
