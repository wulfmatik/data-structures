

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var truthCheck = false;

  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      truthCheck = true;
    }
  }

  return truthCheck;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = this.nodes.indexOf(node);
  this.nodes.splice(index, 1);

  for (var i = 0; i < this.edges[node].length; i++) {
    this.removeEdge(node, this.edges[node][i]);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var found = false;
  for (var i = 0; i < this.edges[fromNode].length; i++) {
    if (this.edges[fromNode][i] === toNode) {
      found = true;
    }
  }
  return found;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index = this.edges[fromNode].indexOf(toNode);
  this.edges[fromNode].splice(index, 1);

  var index = this.edges[toNode].indexOf(fromNode);
  this.edges[toNode].splice(index, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


