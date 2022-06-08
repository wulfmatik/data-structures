var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // create counter for numeric key tracking
  var counter = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    // add current value to key corresponding to current counter value
    storage[counter] = value;
    // increment counter
    counter++;
  };

  someInstance.dequeue = function() {
    // create array of numeric keys currently in storage
    var storageLength = Object.keys(storage).length;
    //  if storageLength has values in it
    if (storageLength > 0) {
      // identify first item in queue and assign to dequeValue
      var dequeValue = storage[Object.keys(storage).shift()];
      // delete first property in object
      delete storage[Object.keys(storage).shift()];
      // return removed value
      return dequeValue;
    }
  };

  someInstance.size = function() {
    // create storageArray to keep track of number of keys in storage
    var storageArray = Object.keys(storage);
    // return the length of the storage array
    return storageArray.length;
  };

  return someInstance;
};
