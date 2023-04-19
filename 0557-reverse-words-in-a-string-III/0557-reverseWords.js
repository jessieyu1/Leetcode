function reverseWords(s) {
  let lastIndex = -1;
  let length = s.length;
  let tempString = s.split("");

  for (let i = 0; i < length; i++) {
    if (tempString[i] === " ") {
      let start = lastIndex + 1;
      let end = i - 1;
      while (start < end) {
        let temp = tempString[start];
        tempString[start] = tempString[end];
        tempString[end] = temp;
        start++;
        end--;
      }
      lastIndex = i;
    }
  }

  let start = lastIndex + 1;
  let end = length - 1;
  while (start < end) {
    let temp = tempString[start];
    tempString[start] = tempString[end];
    tempString[end] = temp;
    start++;
    end--;
  }

  return tempString.join("");
}

module.exports = reverseWords;
