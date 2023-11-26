const maxSlidingWindow = function (nums, k) {
  class MonotonicQueue {
    constructor() {
      this.queue = [];
    }

    push(n) {
      while (this.queue.length > 0 && this.queue[this.queue.length - 1] < n) {
        this.queue.pop();
      }

      this.queue.push(n);
    }

    pop(n) {
      if (this.queue.length > 0 && this.queue[0] === n) {
        this.queue.shift();
      }
    }
    max() {
      return this.queue[0];
    }
  }
  let window = new MonotonicQueue();
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i < k - 1) {
      window.push(nums[i]);
    } else {
      window.push(nums[i]);
      result.push(window.max());
      window.pop(nums[i - k + 1]);
    }
  }
  return result;
};

module.exports = maxSlidingWindow;
