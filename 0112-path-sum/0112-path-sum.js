const hasPathSum = function (root, targetSum) {
    if (root === null) return false
  const traversal = (node, count) => {
    if (node.left === null && node.right === null && count === 0) return true;
    if (node.left === null && node.right === null) return false;

    if (node.left) {
      count -= node.left.val;
      if (traversal(node.left, count)) return true;
      count += node.left.val;
    }
    if (node.right) {
      count -= node.right.val;
      if (traversal(node.right, count)) return true;
      count += node.right.val;
    }
    return false;
  };
  return traversal(root, targetSum - root.val)
};
