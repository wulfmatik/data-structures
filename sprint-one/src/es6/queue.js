class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
  }

  enqueue(value) {
    this.storage[this.counter] = value;
    this.counter++;
  }

  dequeue() {
    var storageLength = Object.keys(this.storage).length;

    if (storageLength > 0) {
      var dequeValue = this.storage[Object.keys(this.storage).shift()];
      delete this.storage[Object.keys(this.storage).shift()];
      return dequeValue;
    }
  }

  size() {
    return Object.keys(this.storage).length;
  }

}

var someInstance = new Queue;
