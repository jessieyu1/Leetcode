const generateMatrix = function(n) {

    let startX = 0;
    let startY = 0;
    let loop = Math.floor(n / 2);
    let mid = Math.floor(n / 2);
    let count = 1;
    let offset = 1;
    let result = new Array(n).fill(0).map(() => (new Array(n).fill(0)))
    while (loop--) {
        let row = startX;
        let col = startY;
        for (; col < n - offset; col++) {
            result[row][col] = count++;
        }
        for (; row <  n - offset; row++) {
            result[row][col] = count++;
        }
        for (; col > startY; col--) {
            result[row][col] = count++;
        }
        for (; row > startX; row--) {
            result[row][col] = count++;
        }
        startX++;
        startY++;
        offset++
    }
    if (n % 2 === 1) {
        result[mid][mid] = count;
    }
    return result;
}

module.exports = generateMatrix;