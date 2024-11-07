function numberOfSubstrings(s) {
  let result = 0;
  let left = 0;
  let temp = "";

  for (let right = 0; right < s.length; right++) {
    temp += s[right];
    while (temp.includes("a") && temp.includes("b") && temp.includes("c")) {
      temp = temp.slice(1);
      left++;
    }
    result += left;
  }
  return result;
}

module.exports = numberOfSubstrings;
