var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};

  someInstance.storage = {};
  someInstance.counter = 0;

  extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

queueMethods.dequeue = function() {
  var storageLength = Object.keys(this.storage).length;

  if (storageLength > 0) {
    var dequeValue = this.storage[Object.keys(this.storage).shift()];
    delete this.storage[Object.keys(this.storage).shift()];
    return dequeValue;
  }
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};
