const maxDepth = (root) => {
  const getHeight = (node) => {
    if (node === null) return 0;
    let leftHeight = getHeight(node.left);
    let rightHeight = getHeight(node.right);
    let height = Math.max(leftHeight, rightHeight) + 1;
    return height;
  };
  return getHeight(root);
};

module.exports = maxDepth;
