const invertTree = function(root) {
    // recursion
    if (root === null) return null;
    let left = invertTree(root.left);
    let right = invertTree(root.right);

    root.right = left;
    root.left = right;
    return root;
};

const invertTree2 = function(root) {
    // traverse
    function traverse(root) {
        if (root === null) return;
        temp = root.left
        root.left = root.right;
        root.right = temp;
        traverse(root.left);
        traverse(root.right)
    }
    traverse(root)
    return root
};


