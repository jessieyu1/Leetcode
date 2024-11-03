function maxFrequency(nums, k) {
    nums.sort((a, b) => a - b);
    let max = 1;
    let left = 0;
    let sum = 0;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while ((nums[right] * (right - left + 1) - sum) > k) {
            sum -= nums[left];
            left++;
        }
        max = Math.max(max, right - left + 1);
    }
    return max;
}

module.exports = maxFrequency;
