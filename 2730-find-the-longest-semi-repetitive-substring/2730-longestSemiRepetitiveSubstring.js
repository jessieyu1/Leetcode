function longestSemiRepetitiveSubstring(s) {
  let max = 1;
  let left = 0;
  let lastRepeated = null;

  for (let right = 1; right < s.length; right++) {
    if (s[right] === s[right - 1]) {
      if (lastRepeated) {
        left = lastRepeated;
      }
      lastRepeated = right;
    }
    max = Math.max(max, right - left + 1);
  }

  return max;
}

module.exports = longestSemiRepetitiveSubstring;
