const sumOfLeftLeaves = function(root) {
    const traverse = (node) => {
        if (node === null) return 0;
        if (node.left === null && node.right === null) return 0;
        let leftSum = traverse(node.left)
        if (node.left !== null && node.left.left === null && node.left.right === null) {
            leftSum = node.left.val
        }
        let rightSum = traverse(node.right)
        let sum = leftSum + rightSum;
        return sum
    }
    return traverse(root)
};