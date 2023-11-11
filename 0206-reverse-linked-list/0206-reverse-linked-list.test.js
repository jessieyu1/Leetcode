const reverseList = require ('./0206-reverse-linked-list');

let head = {
    val: 1,
    next: {
        val: 2,
        next: {
        val: 3,
        next: null,
        },
    },
    };
let expectedOutput = {
    val: 3,
    next: {
        val: 2,
        next: {
        val: 1,
        next: null,
        },
    },
    };
let output = reverseList(head);
console.assert(JSON.stringify(output) === JSON.stringify(expectedOutput), 'Wrong Answer');