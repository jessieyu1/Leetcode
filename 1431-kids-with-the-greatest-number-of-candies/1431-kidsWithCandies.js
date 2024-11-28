function kidsWithCandies(candies, extraCandies) {
    const max = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= max);
}

module.exports = kidsWithCandies;
