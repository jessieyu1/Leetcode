function takeCharacters(s, k) {
  let left = 0;
  let charToCount = new Map();
  let counterA = 0;
  let counterB = 0;
  let counterC = 0;
  let maxLength = 0;
  for (let right = 0; right < s.length; right++) {
    charToCount.set(s[right], (charToCount.get(s[right]) || 0) + 1);
  }

  const a = charToCount.get("a") || 0;
  const b = charToCount.get("b") || 0;
  const c = charToCount.get("c") || 0;
  if (a < k || b < k || c < k) return -1;

  for (let right = 0; right < s.length; right++) {
    if (s[right] === "a") counterA++;
    if (s[right] === "b") counterB++;
    if (s[right] === "c") counterC++;

    while (counterA > a - k || counterB > b - k || counterC > c - k) {
      if (s[left] === "a") counterA--;
      if (s[left] === "b") counterB--;
      if (s[left] === "c") counterC--;
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return s.length - maxLength;
}

module.exports = takeCharacters;
