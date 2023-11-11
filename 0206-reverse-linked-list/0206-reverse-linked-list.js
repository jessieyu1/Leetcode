const reverseList = function (head) {
    //recursive
    if (head === null || head.next === null) return head;
    let last = reverseList(head.next);
    head.next.next = head
    head.next = null
    return last
}

module.exports = reverseList;