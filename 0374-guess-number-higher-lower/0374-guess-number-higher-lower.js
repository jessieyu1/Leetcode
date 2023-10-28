function guess(num) {
    //for testing, need to change this to expectedOutput in the test file
    let guess = 1;
    if ( num > guess ) return -1;
    if ( num <  guess) return 1;
    return 0
}

const guessNumber = function(n) { 
    let start = 1;
    let end = n;

    while (start <= end) {
        let mid = Math.floor(start + ((end - start) / 2))
        if (guess(mid) === 0) return mid
        if (guess(mid) === 1) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return -1;
}

module.exports = guessNumber