/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(node = this.root, count = 1, shortest = Infinity) {
    if (!node) return 0;
    if (!node.left && !node.right) {
      return Math.min(shortest, count);
    }

    count += 1;
    if (node.left) this.minDepth (node.left, count, shortest);
    if (node.right) this.minDepth (node.right, count, shortest);

    return count;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node = this.root, count = 1, longest = 0) {

    if (!node) return 0;
    if (node.left === null && node.right === null) {
      longest = Math.max(longest, count);
      return longest;
    }

    count += 1;
    let left, right = 0;

    if (node.left) {
      left = this.maxDepth (node.left, count, longest);
    }
    if (node.right) {
      right = this.maxDepth (node.right, count, longest);
    }

    longest = Math.max(left, right);
    return longest;
  }

  nextLarger(int) {
    if (!this.root) return null;
    
    let toVisitQueue = [this.root];
    let greaterThanInt = Infinity;
    console.log({toVisitQueue, greaterThanInt});

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      console.log({current, int, greaterThanInt});
      if (current.val > int && current.val < greaterThanInt) {
        greaterThanInt = current.val;
        console.log({greaterThanInt});
      }

      if (current.left) toVisitQueue.push(current.left);
      if (current.right) toVisitQueue.push(current.right);
    }

    return greaterThanInt = (greaterThanInt === Infinity) ? null : greaterThanInt;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
