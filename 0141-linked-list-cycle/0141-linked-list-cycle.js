/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null) return false;
    let curr = head;
    let set = new Set()
    while (curr !== null) {
        if (set.has(curr)) {
            return true
        }
        set.add(curr);
        curr = curr.next
    }
    return false
}

module.exports = hasCycle