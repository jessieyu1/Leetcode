/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function(root) {
    let res = [];
    const dst = (root) => {
        if (root === null) return;
        dst(root.left);
        res.push(root.val);
        dst(root.right);
    }
    dst(root);
    return res;
};

module.exports = inorderTraversal;