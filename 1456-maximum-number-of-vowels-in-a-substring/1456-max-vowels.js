function maxVowels(s, k) {
  let max = 0;
  for (let i = 0; i < k; i++) {
    if ("aeiou".includes(s[i])) {
      max++;
    }
  }
  let current = max;
  for (let i = k; i < s.length; i++) {
    if ("aeiou".includes(s[i])) {
      current++;
    }
    if ("aeiou".includes(s[i - k])) {
      current--;
    }
    max = Math.max(max, current);
  }
  return max;
}

module.exports = maxVowels;
