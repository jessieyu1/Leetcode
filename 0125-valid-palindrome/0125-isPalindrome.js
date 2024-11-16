function isPalindrome(s) {
  let newS = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  if (newS.length <= 1) return true;
  let left = 0;
  let right = newS.length - 1;

  while (left < right) {
    if (newS[left] !== newS[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

module.exports = isPalindrome;
