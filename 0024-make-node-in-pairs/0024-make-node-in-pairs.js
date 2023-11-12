class Node {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
const swapPairs = function (head) {
    let dummyHead = new Node(0, head)
    let curr = dummyHead;
    while (curr.next !== null && curr.next.next !== null) {
            let temp1 = curr.next;
            let temp2 = curr.next.next.next; 
            curr.next = curr.next.next;
            curr.next.next = temp1;
            curr.next.next.next = temp2;
            curr = curr.next.next;
    }
    return dummyHead.next;
};

module.exports = swapPairs;