var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

Queue.prototype.dequeue = function() {
  var storageLength = Object.keys(this.storage).length;

  if (storageLength > 0) {
    var dequeValue = this.storage[Object.keys(this.storage).shift()];
    delete this.storage[Object.keys(this.storage).shift()];
    return dequeValue;
  }
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

var SomeInstance = new Queue();


