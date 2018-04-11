'use strict';

class BST {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (!this.key) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      if (this.left === null) {
        this.left = new BST(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    if (this.key === key) {
      return this.value;
    } else if (key > this.key && this.left) {
      this.left.find(key);
    } else if (key < this.key && this.right) {
      this.right.find(key);
    } else {
      throw new Error('Key Error');
    }
  }

  remove(key) {
    if (this.key === key) {
      if (this.left && this.right) {
        const candidate = this.right._findMin();
        this.key = candidate.key;
        this.value = candidate.value;
        candidate.remove(candidate.key);
      } else if (this.left) {
        this._replaceWith(this.left);
      } else if (this.right) {
        this._replaceWith(this.right);
      } else {
        this._replaceWith(null);
      }
    } else if (key > this.key && this.left) {
      this.left.remove(key);
    } else if (key < this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error('Key Error');
    }
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this === this.parent.left) {
        this.parent.left = node;
      } else if (this === this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }

  _findMax() {
    if (!this.right) {
      return this;
    }
    return this.right._findMax();
  }
}

function main() {
  let bst = new BST();
  bst.insert(25, 25);
  bst.insert(15, 15);
  bst.insert(50, 50);
  bst.insert(10, 10);
  bst.insert(24, 24);
  bst.insert(35, 35);
  bst.insert(70, 70);
  bst.insert(4, 4);
  bst.insert(12, 12);
  bst.insert(18, 18);
  bst.insert(31, 31);
  bst.insert(44, 44);
  bst.insert(66, 66);
  bst.insert(90, 90);
  bst.insert(22, 22);
  console.log('Pre Order');
  preOrder(bst);
  console.log('In Order');
  inOrder(bst);
  console.log('Post Order');
  postOrder(bst);
}

main();

function preOrder(tree) {
  if (tree === null) {
    return;
  }
  console.log(tree.value);
  preOrder(tree.left);
  preOrder(tree.right);
}

function inOrder(tree) {
  if (tree === null) {
    return;
  }
  
  inOrder(tree.left);
  console.log(tree.value);
  inOrder(tree.right);
}

function postOrder(tree) {
  if (tree === null) {
    return;
  }
  
  postOrder(tree.left);
  postOrder(tree.right);
  console.log(tree.value);
}