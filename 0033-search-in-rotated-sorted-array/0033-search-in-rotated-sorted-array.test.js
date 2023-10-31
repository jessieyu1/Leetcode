const search = require('./0033-search-in-rotated-sorted-array');

let input = [4,5,6,7,0,1,2]
let target = 0
let output = 4

console.assert(search(input, target) === output, `Expected ${output} but received ${search(input, target)}`)

input = [4,5,6,7,0,1,2]
target = 3
output = -1

console.assert(search(input, target) === output, `Expected ${output} but received ${search(input, target)}`)

input = [1]
target = 0
output = -1

console.assert(search(input, target) === output, `Expected ${output} but received ${search(input, target)}`)

input = [3, 1]
target = 0
output = -1

console.assert(search(input, target) === output, `Expected ${output} but received ${search(input, target)}`)

input = [3, 5, 1]
target = 1
output = 2

console.assert(search(input, target) === output, `Expected ${output} but received ${search(input, target)}`)