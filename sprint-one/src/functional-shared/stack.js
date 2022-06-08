var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create an instance object
  var someInstance = {};
  // create a storage object key to store values
  someInstance.storage = {};

  // use extend to add methods object to instance
  extend(someInstance, stackMethods);

  // return instance
  return someInstance;
};

// create extend function
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};
// create methods object to store methods
var stackMethods = {};
// create push method
stackMethods.push = function(value) {
  // find storage length
  var storageLength = Object.keys(this.storage).length;
  // add current value to numeric key in storage object
  this.storage[storageLength] = value;
};
// create pop method
stackMethods.pop = function() {
  // get length of storage object
  var storageLength = Object.keys(this.storage).length;
  // if storage is not empty
  if (storageLength > 0) {
    // find last item stored
    var poppedValue = this.storage[storageLength - 1];
    // delete last item stored in storage
    delete this.storage[storageLength - 1];
    // return that last item
    return poppedValue;
  }
};
// create size method
stackMethods.size = function() {
  // return current length of storage object keys
  return Object.keys(this.storage).length;
};


