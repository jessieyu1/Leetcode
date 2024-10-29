function maxSubarrayLength (nums, k) {
    let max = 0;
    let eleToFrequency = new Map();
    let left = 0;

    for(let right = 0; right < nums.length; right++) {
        eleToFrequency.set(nums[right], (eleToFrequency.get(nums[right]) || 0) + 1)
        while (eleToFrequency.get(nums[right]) > k) {
            eleToFrequency.set(nums[left], eleToFrequency.get(nums[left]) - 1) 
            left++;
        }
        max = Math.max(max, right - left + 1)
    }
    return max;
}

module.exports = maxSubarrayLength;