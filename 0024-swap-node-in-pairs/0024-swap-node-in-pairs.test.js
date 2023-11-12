const swapPairs = require('./0024-swap-node-in-pairs');

let head = {
    val: 1,
    next: {
        val: 2,
        next: {
        val: 3,
        next: null,
        }
    }
    };

let expectedOutput = {
    val: 2,
    next: {
        val: 1,
        next: {
        val: 3,
        next: null,
        }
    }
    };

let output = swapPairs(head);

console.assert(JSON.stringify(output) === JSON.stringify(expectedOutput), 'Wrong Answer');
