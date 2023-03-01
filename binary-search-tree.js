// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file
// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

/////////////////////////////////

insert(val, currentNode=this.root) {
  // Your code here
  const newNode = new TreeNode(val);
  // if there is no root
  if (!this.root) {
    this.root = newNode;
    return this;
  }
  // if the val is less than the currentNode's value
  // go to the left
  if (val < currentNode.val) {
    // check if there is anything to the left
    // if not that's where the new node goes
    if (!currentNode.left) {
      currentNode.left = newNode;
    } else {
      // otherwise recurse to the left
      return this.insert(val, currentNode.left);
    }
  }

  // if the val is greater than the currentNode's value
  // go to the right
  if (val > currentNode.val) {
    // check if there is anything to the right
    if (!currentNode.right) {
      // if not that's where the node goes
      currentNode.right = newNode;
    }else {
      // otherwise recurse to the right
      return this.insert(val, currentNode.right);
    }

  }

}
/////////////////////////////////
  /////////////////////////////

  search(val) {
    let currentNode = this.root;

    while(currentNode)
    {
      if (currentNode.val === val) return true;

      if (currentNode.val > val) {
        currentNode = currentNode.left;
      }
      else currentNode = currentNode.right;
    }
    return false
  }


  preOrderTraversal(currentNode = this.root) {
    if (!currentNode) return this;
    console.log(currentNode.val)
    this.preOrderTraversal(currentNode.left)
    this.preOrderTraversal(currentNode.right)
  }


  inOrderTraversal(currentNode = this.root) {
    if (!currentNode) return this;
    this.inOrderTraversal(currentNode.left)
    console.log(currentNode.val)
    this.inOrderTraversal(currentNode.right)

  }


  postOrderTraversal(currentNode = this.root) {
    if (!currentNode) return this;
    this.postOrderTraversal(currentNode.left)
    this.postOrderTraversal(currentNode.right)
    console.log(currentNode.val)


  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    if (!this.root) return this;
    const queue = []
    queue.push(this.root)

    while(queue.length) {
      const curr = queue.shift();
      console.log(curr.val);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    return this
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    if (!this.root) return this;
    const stack = []
    stack.push(this.root)

    while(stack.length) {
      const curr = stack.pop();
      console.log(curr.val);
      if (curr.left) stack.push(curr.left);
      if (curr.right) stack.push(curr.right);
    }
    return this
  }

}
// Your code here
module.exports = { TreeNode, BinarySearchTree }
