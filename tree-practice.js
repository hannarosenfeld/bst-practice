const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode = this.root) {
  // Your code here
    if (rootNode.left == null)
        return rootNode.val;

    return findMinBST(rootNode.left);
}


function findMaxBST (rootNode) {
  // Your code here
  if (rootNode.right == null)
  return rootNode.val;
return findMaxBST(rootNode.right)
}

///////////////////////////////


function findMinBT (rootNode) {
    if (rootNode === null) return;

    let res = rootNode.val;
    let lres = findMinBT(rootNode.left);
    let rres = findMinBT(rootNode.right);

    if (lres < res) res = lres;
    if (rres < res) res = rres;
    return res;
}

////////////////////////////////

function findMaxBT (rootNode) {
  if (rootNode === null) return;

  let res = rootNode.val;
  let lres = findMaxBT(rootNode.left);
  let rres = findMaxBT(rootNode.right);

  if (lres > res) res = lres;
  if (rres > res) res = rres;
  return res;
}
// Roger's Solution
// function findMaxBT (rootNode) {
//   //!!START
//   let min = rootNode.val;

//   if (rootNode.left) min = Math.max(min, findMaxBT(rootNode.left));
//   if (rootNode.right) min = Math.max(min, findMaxBT(rootNode.right));

//   return min;
//   //!!END
// }

function getHeight (rootNode) {
  //if no node, return
  if (!rootNode) return -1;
  if (!rootNode.left && !rootNode.right) return 0;
  else {
    let ldepth = getHeight(rootNode.left)
    let rdepth = getHeight(rootNode.right)

    if (ldepth > rdepth) return (ldepth + 1);
    else return (rdepth+1)
  }
}

// function getHeight (rootNode) {
//   //!!START
//   if (!rootNode) return -1;
//   if (!rootNode.left && !rootNode.right) return 0;
//   return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right));
//   //!!END
// }

function balancedTree (rootNode) {
  // if (!rootNode) return false;


  // let ldepth = getHeight(rootNode.left);
  // let rdepth = getHeight(rootNode.right);
  // //console.log(`IM RIGHT HERE!!`,ldepth, rdepth)

  // if (ldepth === rdepth) return true;
  // else if (ldepth +1 === rdepth || ldepth -1 === rdepth) return true;
  // return false
  let queue = [rootNode];
  while (queue.length) {
    let curr = queue.shift();

    if (Math.abs(getHeight(curr.left) - getHeight(curr.right)) <= 1) {
      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)
    } else return false
  }
  return true
}


function countNodes (rootNode) {
  // Your code here
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
