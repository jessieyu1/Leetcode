function equalSubstring(s, t, maxCost) {
  let result = 0;
  let left = 0;
  let diff = 0;
  for (let right = 0; right < s.length; right++) {
    diff += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));
    while (diff > maxCost) {
      diff -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
      left++;
    }
    result = Math.max(result, right - left + 1);
  }

  return result;
}

module.exports = equalSubstring;
