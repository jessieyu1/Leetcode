const detectCycle = function(head) {
    let fast = head;
    let slow = head;
    while (fast !== null && fast.next !==null) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) {
            let index1 = fast;
            let index2 = head;
            while (index1 !== index2) {
                index1 = index1.next;
                index2 = index2.next;
            }
            return index1
        }
    }
        return null  

}

module.exports = deleteCycle;