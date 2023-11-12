class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const removeNthFromEnd = function (head, n) {
  let dummyHead = new ListNode(0, head);
  let slow = dummyHead;
  let fast = dummyHead;

  for (let i = 1; i <= n + 1; i++) {
    fast = fast.next;
  }

  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return dummyHead.next;
};

module.exports = removeNthFromEnd;
