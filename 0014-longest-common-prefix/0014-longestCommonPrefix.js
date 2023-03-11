/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let first = strs[0];
  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < first.length; j++) {
      // compare each char to each char of the first word
      if (strs[i][j] !== first[j]) {
        first = first.substring(0, j);
      }
    }
  }
  return first;
};

module.exports = longestCommonPrefix;
