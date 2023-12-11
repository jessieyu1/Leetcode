const topKFrequent = function(nums, k) {
    const countMap = new Map();
    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0 + 1))
    }
    return [...countMap.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(i => i[0])
}

module.exports = topKFrequent;