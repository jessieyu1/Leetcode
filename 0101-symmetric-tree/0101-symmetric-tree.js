const isSymmetric = function (root) {
const isSame = (leftNode, rightNode) => {
    if (leftNode === null && rightNode === null) return true;
    if (leftNode === null || rightNode === null) return false;
    if (leftNode.val !== rightNode.val) return false
    return isSame(leftNode.right, rightNode.left)  && isSame(leftNode.left, rightNode.right) 
}
return isSame(root.left, root.right)
}