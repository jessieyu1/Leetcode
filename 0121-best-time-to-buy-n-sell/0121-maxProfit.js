function maxProfit(prices) {
  let lowest = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (lowest > prices[i]) {
      lowest = prices[i];
    }
    maxProfit = Math.max(prices[i] - lowest, maxProfit);
  }
  return maxProfit;
}
module.exports = maxProfit;
