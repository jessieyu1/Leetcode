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

module.exports = reverseWords;
