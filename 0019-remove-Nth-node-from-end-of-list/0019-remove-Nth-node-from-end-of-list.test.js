const removeNthFromEnd = require("./0019-remove-Nth-node-from-end-of-list");

let head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

let n = 2;

let result = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 5,
        next: null,
      },
    },
  },
};

let expected = removeNthFromEnd(head, n);

console.assert(
  JSON.stringify(expected) === JSON.stringify(result),
  "removeNthFromEnd should return the correct node"
);
