const levelOrder = function (root) {
  let res = [],
    queue = [];
  if (root === null) return res;
  queue.push(root);

  while (queue.length !== 0) {
    let length = queue.length;
    let currLevel = [];

    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      currLevel.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(currLevel);
  }
  return res;
};

module.exports = levelOrder;
