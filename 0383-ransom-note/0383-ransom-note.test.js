const canConstruct = require('./0383-ransom-note');

// let ransomNote = 'a';
// let magazine = 'b';

// let actualOutput = canConstruct(ransomNote, magazine);

// console.assert(actualOutput === false, `Expected test case 1 to be ${false}, but got ${actualOutput} instead`);

let ransomNote = 'aa';
let magazine = 'ab';

actualOutput = canConstruct(ransomNote, magazine);

console.assert(actualOutput=== false, `Expected test case 2 to be ${false}, but got ${actualOutput} instead`);

ransomNote = 'aa';
magazine = 'aab';

actualOutput = canConstruct(ransomNote, magazine);

console.assert(actualOutput === true, `Expected test case 3 to be ${true}, but got ${actualOutput} instead`);
