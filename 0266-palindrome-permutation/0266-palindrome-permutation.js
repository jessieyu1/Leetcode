function canPermutePalindrome(s) {
  let map = new Map();
  let oddKeyCount = 0;
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
    if (map.get(s[i]) % 2 !== 0) {
      oddKeyCount++;
    } else {
      oddKeyCount--;
    }
  }
  return oddKeyCount <= 1;
}

module.exports = canPermutePalindrome;
