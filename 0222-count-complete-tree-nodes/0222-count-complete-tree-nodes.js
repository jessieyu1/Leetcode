const countNodes = function(root) {
    const getNumber = (node) => {
        if (node === null) return 0;
        let left = node.left;
        let right = node.right;
        let leftDepth, rightDepth = 0;
       
        while (left !== null) {
            left = left.left;
            leftDepth++;
        }
        while (right !== null) {
            right = right.right;
            rightDepth++;
        }
        if (leftDepth === rightDepth) return 2 ** leftDepth - 1;
        return  (getNumber(node.left) + getNumber(node.right) + 1)
    }
    return getNumber(root)
};

module.exports = countNodes;