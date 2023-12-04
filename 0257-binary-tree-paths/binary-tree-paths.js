const binaryTreePaths = (root) => {
  let result = [];
  const traverse = (node, path) => {
    if (node === null) return;
    path.push(node.val);
    if (node.left === null && node.right === null) {
      result.push([...path]);
    }
    traverse(node.left, [...path]);
    traverse(node.right, [...path]);
  };

  traverse(root, []);

  return result.map((path) => path.join("->"));
};
