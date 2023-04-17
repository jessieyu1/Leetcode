function maximumTime(time) {
  let [h1, h2, colon, m1, m2] = time.split("");
  if (h1 === "?") {
    h1 = h2 === "?" || h2 < 4 ? "2" : "1";
  }
  if (h2 === "?") {
    h2 = h1 === "2" ? "3" : "9";
  }
  if (m1 === "?") {
    m1 = "5";
  }
  if (m2 === "?") {
    m2 = "9";
  }
  return `${h1}${h2}${colon}${m1}${m2}`;
}

module.exports = maximumTime;
