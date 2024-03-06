const reverseList = function (head) {
    //recursive
    if (head === null || head.next === null) return head;
    let last = reverseList(head.next);
    head.next.next = head
    head.next = null
    return last
}


const reverseListI = function (head) {
    //iterative
    let temp = null;
    let curr = head;
    let prev = null;
    while (curr) {
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
}
module.exports = reverseList;