/* with built-in methods
const reverseWords = function (s) {
  let words = s.split(" ");
  let arr = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length !== 0) {
      arr.push(words[i]);
    }
  }

  return arr.reverse().join(" ");
};
*/
const reverseWords = function (s) {
  let words = s.split(" ").filter((word) => word !== "");
  let left = 0;
  let right = words.length - 1;

  while (left < right) {
    let temp = words[left].trim();
    words[left] = words[right].trim();
    words[right] = temp;
    left++;
    right--;
  }
  return words.join(" ");
};

module.exports = reverseWords;
