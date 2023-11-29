const rightSideView = function (root) {
  let res = [],
    queue = [];
  if (root === null) return res;
  queue.push(root);

  while (queue.length !== 0) {
    let length = queue.length;
    let node;

    for (let i = 0; i < length; i++) {
      node = queue.shift();

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    res.push(node.val);
  }
  return res;
};

module.exports = rightSideView;
