const removeDuplicates = require('./1047-remove-all-adjacent-duplicates.js')

let s = "abbaca"
let output = "ca"
console.assert(
    removeDuplicates(s) === output,
    `Expected ${output}, got ${removeDuplicates(s)}`
    )

s = "azxxzy"
output = "ay"
console.assert(
    removeDuplicates(s) === output,
    `Expected ${output}, got ${removeDuplicates(s)}`
    
    )
