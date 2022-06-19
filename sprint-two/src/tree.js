var Tree = function(value) {
  var newTree = {};

  _.extend(newTree, treeMethods);

  newTree.value = value;

  // your code here
  newTree.children = [];
  newTree.size = 1;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
  this.size++;
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

// treeMethods.nodeDepth = function(target) {

//   var sum = 0;

//   var inner = function(currentNode) {
//     if (currentNode.value === target) {
//       return sum;
//     } else if (currentNode.children.length > 0) {
//       for (var i = 0; i < currentNode.children.length; i++) {
//         sum++;
//         inner(currentNode.children[i]);
//       }
//     }
//   };

//   inner(this);

//   return sum;

// };



/*
 * Complexity: What is the time complexity of the above functions?
 */
