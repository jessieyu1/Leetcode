function minimumLength(s) {
  let right = s.length - 1;
  let left = 0;

  while (left < right && s[left] === s[right]) {
    let char = s[left];
    while (left <= right && char === s[left]) {
      left++;
    }

    while (left <= right && char === s[right]) {
      right--;
    }
  }

  return right - left + 1;
}

module.exports = minimumLength;
