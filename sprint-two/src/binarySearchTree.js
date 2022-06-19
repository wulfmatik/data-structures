var BinarySearchTree = function(value) {

  var newNode = {};

  _.extend(newNode, nodeMethods);

  newNode.value = value;

  newNode.left = null;
  newNode.right = null;

  return newNode;

};

var nodeMethods = {};


nodeMethods.insert = function(value) {

  if (this.value < value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
      return;
    }
    this.right.insert(value);
  } else if (this.value > value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
      return;
    }
    this.left.insert(value);
  }
};

nodeMethods.contains = function(value) {

  if (this.value === value) {
    return true;
  }
  if (this.left === null && this.right === null && this.value !== value) {
    return false;
  }
  if (this.left.value >= value && this.left !== null) {
    return this.left.contains(value);
  } else if (this.right.value <= value && this.right !== null) {
    return this.right.contains(value);
  }

};

nodeMethods.depthFirstLog = function(func) {

  func(this.value);

  if (this.left !== null) {
    this.left.depthFirstLog(func);
  }

  if (this.right !== null) {
    this.right.depthFirstLog(func);
  }
};

nodeMethods.size = function() {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
