/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let toVisitQueue = [this.root];
    let sum = 0;

    while (toVisitQueue.length > 0 && this.root !== null) {
      let current = toVisitQueue.shift();
      
      if (typeof current.val === 'number') {
        sum += current.val;
      }

      if (current.children) {
        for (let child of current.children) {
          toVisitQueue.push(child);
        }
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let toVisitQueue = [this.root];
    let count = 0;

    while (toVisitQueue.length && this.root) {
      let current = toVisitQueue.shift();

      if (current.val % 2 === 0) {
        count += 1;
      }

      if (current.children) {
        toVisitQueue.push(...current.children);
      }
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let toVisitQueue = [this.root];
    let count = 0;

    while (toVisitQueue.length && this.root) {
      let current = toVisitQueue.shift();

      if (current.val > lowerBound) {
        count += 1;
      }

      if (current.children) {
        toVisitQueue.push(...current.children);
      }
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
