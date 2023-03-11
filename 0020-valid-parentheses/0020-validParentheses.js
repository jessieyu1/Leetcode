/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  //odd check before everything to save memory usage
  if (s.length % 2 !== 0) return false;
  const map = {
    "[": "]",
    "(": ")",
    "{": "}",
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(map[s[i]]);
    } else if (s[i] !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
};

module.exports = isValid;
