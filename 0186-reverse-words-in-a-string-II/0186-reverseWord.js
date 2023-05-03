function reverseWords(s) {
  // Reverse the entire character array
  s.reverse();

  // Reverse each individual word
  let start = 0;
  for (let end = 0; end < s.length; end++) {
    if (s[end] === " ") {
      reverse(s, start, end - 1);
      start = end + 1;
    }
  }

  // Reverse the last word
  reverse(s, start, s.length - 1);
  return s;
}

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

module.exports = reverseWords;
