var Tree = function(value) {
  var newTree = {};

  _.extend(newTree, treeMethods);

  newTree.value = value;

  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var found = false;

  var inner = function(currentNode) {
    if (currentNode.value === target) {
      found = true;
    } else if (currentNode.children.length > 0) {
      for (var i = 0; i < currentNode.children.length; i++) {
        inner(currentNode.children[i]);
      }
    }
  };

  inner(this);

  return found;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
