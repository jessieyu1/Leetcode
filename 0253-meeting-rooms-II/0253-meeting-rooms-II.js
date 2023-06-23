function minMeetingRooms(intervals) {
  const compareFunc = (a, b) => a - b,
    minHeap = new MinHeap(compareFunc);

  intervals.sort((a, b) => a[0] - b[0]);

  let maxRooms = 0;

  intervals.forEach((interval) => {
    if (minHeap.size > 0 && minHeap.peek() <= interval[0]) {
      minHeap.extract();
    }

    minHeap.insert(interval[1]);

    maxRooms = Math.max(maxRooms, minHeap.size);
  });

  return maxRooms;
}

class MinHeap {
  constructor(compareFunc) {
    this.compareFunc = compareFunc;
    this.heap = [];
  }

  insert(val) {
    this.heap.unshift(val);
    this.heap.sort(this.compareFunc);
  }

  extract() {
    if (this.size === 0) return null;
    return this.heap.shift();
  }

  peek() {
    if (this.size === 0) return null;
    return this.heap[0];
  }

  get size() {
    return this.heap.length;
  }
}

module.exports = minMeetingRooms;
