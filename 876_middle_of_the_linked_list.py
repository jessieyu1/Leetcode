# Given the head of a singly linked list, return the middle node of the linked list.

# If there are two middle nodes, return the second middle node.

# Input: head = [1, 2, 3, 4, 5]
# Output: [3, 4, 5]
# Explanation: The middle node of the list is node 3.
def middleNode(head):
    result = []
    l = len(head)
    for i in range(l):
        if l % 2 != 0 and i >= (l/2):
            result.append(head[i])
        elif l % 2 == 0 and i >= (l/2):
            result.append(head[i])
    return result


head = [1, 2, 3, 4, 5]
head2 = [1, 2, 3, 4, 5, 6]
print(middleNode(head))
print(middleNode(head2))
