function generate(numRows) {
  let result = [];

  for (let row = 0; row < numRows; row++) {
    result.push([1]);
    for (let cell = 1; cell < row + 1; cell++) {
      if (cell === row) {
        result[row].push(1);
        break;
      }
      result[row][cell] = result[row - 1][cell - 1] + result[row - 1][cell];
    }
  }
  return result;
}

module.exports = generate;
