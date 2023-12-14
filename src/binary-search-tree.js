const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  // helper method which creates a new node to
  // be inserted and calls insertNode
  add(data) {
    // Creating a node and initialising with data
    let newNode = new Node(data);

    // root is null then node will be added to the tree and made root.
    if (this._root === null) this._root = newNode;
    // find the correct position in the tree and add the node
    else this.insertNode(this._root, newNode);
  }

  // Method to insert a node in a tree. It moves over the tree to find the location to insert a node with a given data
  insertNode(node, newNode) {
    // if the data is less than the node data move left of the tree
    if (newNode.data < node.data) {
      // if left is null insert node here
      if (node.left === null) node.left = newNode;
      // if left is not null recur until null is found
      else this.insertNode(node.left, newNode);
    }

    // if the data is more than the node data move right of the tree
    else {
      // if right is null insert node here
      if (node.right === null) node.right = newNode;
      // if right is not null recur until null is found
      else this.insertNode(node.right, newNode);
    }
  }

  has(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
