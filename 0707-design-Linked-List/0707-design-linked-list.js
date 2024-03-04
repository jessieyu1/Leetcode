class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let node = this.getNode(index);

  return node ? node.val : -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let node = new ListNode(val, this.head);
  this.head = node;
  if (!this.tail) {
    this.tail = node;
  }
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new ListNode(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  }
  this.tail.next = newNode;
  this.tail = newNode;
  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;
  if (index === 0) {
    this.addAtHead(val);
    return;
  }
  if (index === this.size) {
    this.addAtTail(val);
    return;
  }
  let preNode = this.getNode(index - 1);
  if (!preNode) return;
  let newNode = new ListNode(val);
  newNode.next = preNode.next;
  preNode.next = newNode;
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;
  if (index === 0) {
    this.head = this.head.next;
    if (index === this.size - 1) {
      this.tail = this.head;
    }
    this.size--;
    return;
  }
  let node = this.getNode(index - 1);
  node.next = node.next.next;
  if (index === this.size - 1) {
    this.tail = node;
  }
  this.size--;
};

MyLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index >= this.size) return null;
  let curr = this.head;
  while (index-- > 0) {
    curr = curr.next;
  }
  return curr;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
