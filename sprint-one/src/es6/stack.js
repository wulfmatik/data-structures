class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    var storageLength = Object.keys(this.storage).length;
    this.storage[storageLength] = value;
  }

  pop() {
    var storageLength = Object.keys(this.storage).length;

    if (storageLength > 0) {
      var poppedValue = this.storage[storageLength - 1];
      delete this.storage[storageLength - 1];
      return poppedValue;
    }
  }

  size() {
    return Object.keys(this.storage).length;
  }

}

var someInstance = new Stack();