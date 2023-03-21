/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let set = new Set();
  while (n !== 1 && !set.has(n)) {
    set.add(n);
    n = Number(
      n
        .toString()
        .split("")
        .reduce((x, y) => x + Number(y) ** 2, 0)
    );
  }
  return n === 1;
};
module.exports = isHappy;
