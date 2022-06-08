var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value) {
  var storageLength = Object.keys(this.storage).length;
  this.storage[storageLength] = value;
};

Stack.prototype.pop = function() {
  var storageLength = Object.keys(this.storage).length;

  if (storageLength > 0) {
    var poppedValue = this.storage[storageLength - 1];
    delete this.storage[storageLength - 1];
    return poppedValue;
  }
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};

var SomeInstance = new Stack();


