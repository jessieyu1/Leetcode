const removeDuplicates = function (s) {
  temp = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === temp[temp.length - 1] && temp.length) {
      temp.pop();
    } else {
      temp.push(s[i]);
    }
  }
  return temp.join("");
};

module.exports = removeDuplicates;
