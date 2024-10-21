function maximumLengthSubstring(s) {
  let result = 0;
  let left = 0;
  let charToIndex = new Map();

  for (let right = 0; right < s.length; right++) {
    charToIndex.set(s[right], (charToIndex.get(s[right]) || 0) + 1);
    while (charToIndex.get(s[right]) > 2) {
      charToIndex.set(s[left], charToIndex.get(s[left]) - 1);
      left++;
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
}

module.exports = maximumLengthSubstring;
