function strString(haystack, needle) {
  let needleSize = needle.length;
  let haystackSize = haystack.length;
  let result = -1;

  for (let i = 0; i < haystackSize; i++) {
    if (haystack.slice(i, needleSize + i) === needle) {
      result = i;
      break;
    }
  }
  return result;
}

module.exports = strString;
