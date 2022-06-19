var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);

  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var storageLength = Object.keys(this.storage).length;
  this.storage[storageLength] = value;
};

stackMethods.pop = function() {
  var storageLength = Object.keys(this.storage).length;

  if (storageLength > 0) {
    var poppedValue = this.storage[storageLength - 1];
    delete this.storage[storageLength - 1];
    return poppedValue;
  }
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};


