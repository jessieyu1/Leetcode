const buildTree = function (preorder, inorder) {
    if (preorder.length === 0) return null;
    let rootVal = preorder.shift();
    let rootIndex = inorder.indexOf(rootVal);

    let root = new TreeNode(rootVal);
    root.left = buildTree(preorder.slice(0, rootIndex), inorder.slice(0, rootIndex))
    root.right = buildTree(preorder.slice(rootIndex), inorder.slice(rootIndex + 1))
    return root;
};