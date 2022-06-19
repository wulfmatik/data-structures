var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {};

  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var storageLength = Object.keys(this.storage).length;
  this.storage[storageLength] = item;
};

setPrototype.contains = function(item) {
  var found = false;
  for (var key in this.storage) {
    if (this.storage[key] === item) {
      found = true;
    }
  }
  return found;
};

setPrototype.remove = function(item) {
  for (var key in this.storage) {
    if (this.storage[key] === item) {
      delete this.storage[key];
    }
  }
};

setPrototype.size = function() {
  return Object.keys(this.storage).length;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
