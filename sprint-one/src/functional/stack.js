var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // create array of numeric keys
    var storageLength = Object.keys(storage).length;
    // store values at numeric keys inside storage object
    storage[storageLength] = value;

  };

  someInstance.pop = function() {
    // create array of numeric keys currently in storage
    var storageLength = Object.keys(storage).length;
    //  if storageLength has values in it
    if (storageLength > 0) {
      // create popped value equal to last property in storage object
      var poppedValue = storage[storageLength - 1];
      // delete last property in object
      delete storage[storageLength - 1];
      // return poppedValue
      return poppedValue;
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
