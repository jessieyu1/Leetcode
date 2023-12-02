const minDepth = (root) => {
  getHeight = (node) => {
    if (node === null) return 0;
    if (node.left === null && node.right !== null) {
      return getHeight(node.right) + 1;
    }
    if (node.left !== null && node.right === null) {
      return getHeight(node.left) + 1;
    }
    return Math.min(getHeight(node.left), getHeight(node.right)) + 1;
  };
  return getHeight(root);
};

module.exports = minDepth;
