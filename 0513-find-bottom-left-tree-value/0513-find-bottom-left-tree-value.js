const findBottomLeftValue = function (root) {
  let result,
    maxDepth = 0;
  const traversal = function (node, depth) {
    if (node.left === null && node.right === null) {
      if (depth > maxDepth) {
        maxDepth = depth;
        result = node.val;
      }
    }
    node.left && traversal(node.left, depth + 1);

    node.right && traversal(node.right, depth + 1);
  };
  traversal(root, 1);
  return result;
};
