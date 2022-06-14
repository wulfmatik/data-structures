var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = Node(value);
    }

    if (list.head !== null) {
      list.head.next = Node(value);
    }

    list.tail = Node(value);
  };

  list.removeHead = function() {
    var removedHead = list.head;
    delete list.head;
    if (removedHead.next !== null) {
      list.head = removedHead.next;
    }
    return removedHead.value;
  };

  list.contains = function(target) {
    var result = false;
    var currentNode = list.head;

    while (currentNode !== null) {
      //console.log(currentNode);
      if (currentNode.value === target) {
        result = true;
        break;
      }

      currentNode = currentNode.next;
      console.log(currentNode);
    }
    //console.log(result)
    return result;

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */