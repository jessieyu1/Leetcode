function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ?  null: next)
}

const removeElements = function(head, val) {
    let dummy = new ListNode(0, head);
    let curr = dummy;
    while (curr && curr.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next
            continue
        }
        curr = curr.next;
    }
    return dummy.next
}

module.exports = removeElements;