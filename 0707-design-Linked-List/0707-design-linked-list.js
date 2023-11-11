class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
class MyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  getNode(index) {
    if (index >= this.size || index < 0) return -1;
    let curr = new Node(0, this.head);
    while (index-- >= 0) {
      curr = curr.next;
    }
    return curr;
  }
  get(index) {
    if (index >= this.size || index < 0) return -1;
    return this.getNode(index).val;
  }

  addAtHead(val) {
    this.head = new Node(val, this.head);
    this.size++;
  }
  addAtTail(val) {
    let node = new Node(val, null);
    let curr;
    //如果没头
    if (!this.head) {
      this.head = node;
      this.size++;
    } else {
      // 虚拟头
      curr = this.head;
    }
    //整体后移
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = node;
    this.size++;
  }

  addAtIndex(val, index) {
    if (index < 0) return null;
    else if (index === 0) return this.addAtHead(val);
    else if (index === this.size - 1) return this.addAtTail(val);
    else {
      let node = this.getNode(index - 1);
      node.next = new Node(val, node.next);
      this.size++;
    }
  }
  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) return;
    else if (index === 0) {
      this.head = this.head.next;
      this.size--;
    } else if (index === this.size - 1) {
      let node = this.getNode(index - 1);
      node.next = null;
      this.size--;
    } else {
        let node = this.getNode(index -1);
        node.next = node.next.next
        this.size--;
    }
  }
}

