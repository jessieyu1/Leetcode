function continuousSubarrays(nums) {
  let ans = 0;
  let left = 0;
  let minDeque = [];
  let maxDeque = [];

  for (let right = 0; right < nums.length; right++) {
    while (
      minDeque.length &&
      nums[minDeque[minDeque.length - 1]] > nums[right]
    ) {
      minDeque.pop();
    }
    minDeque.push(right);

    while (
      maxDeque.length &&
      nums[maxDeque[maxDeque.length - 1]] < nums[right]
    ) {
      maxDeque.pop();
    }
    maxDeque.push(right);

    while (nums[maxDeque[0]] - nums[minDeque[0]] > 2) {
      left++;
      if (minDeque[0] < left) minDeque.shift();
      if (maxDeque[0] < left) maxDeque.shift();
    }

    ans += right - left + 1;
  }

  return ans;
}

module.exports = continuousSubarrays;
