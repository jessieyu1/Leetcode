function firstUniqChar(s) {
  let map = new Map();
  let count = 0;
  let result = -1;

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], count);
    } else {
      map.set(s[i], map.get(s[i]) + 1);
    }
  }

  for (let [key, value] of map.entries()) {
    if (value === 0) {
      result = s.indexOf(key);
      break;
    } else {
      result = -1;
    }
  }
  return result;
}

module.exports = firstUniqChar;
