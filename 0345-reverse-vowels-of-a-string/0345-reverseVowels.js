function reverseVowels(s) {
  let left = 0;
  let right = s.length - 1;
  let dict = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let arr = s.split("");
  while (left < right) {
    if (!dict.includes(arr[left])) {
      left++;
      continue;
    }
    if (!dict.includes(arr[right])) {
      right--;
      continue;
    }
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }

  return arr.join("");
}

module.exports = reverseVowels;
