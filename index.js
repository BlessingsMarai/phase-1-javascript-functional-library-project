// Array functions

function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else if (n > array.length) {
      return array;
    } else {
      return array.slice(0, n);
    }
  }
  
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else if (n > array.length) {
      return array;
    } else {
      return array.slice(-n);
    }
  }
  
  // Object functions
  
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return Object.values(object);
  }
  
  // Collection functions (arrays or objects)
  
  function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (const key in collection) {
        callback(collection[key], key, collection);
      }
    }
    return collection; // Return the original collection
  }
  
  function myMap(collection, callback) {
    const newCollection = [];
    myEach(collection, (element, key, collection) => {
      newCollection.push(callback(element, key, collection));
    });
    return newCollection;
  }
  
  function myReduce(collection, callback, acc) {
    if (Array.isArray(collection)) {
      if (acc === undefined) {
        acc = collection[0];
        collection = collection.slice(1);
      }
      for (let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], i, collection);
      }
    } else {
      const keys = Object.keys(collection);
      if (acc === undefined) {
        acc = collection[keys[0]];
        keys.shift();
      }
      for (const key of keys) {
        acc = callback(acc, collection[key], key, collection);
      }
    }
    return acc; // Return the final reduced value
  }
  
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else {
      for (const key in collection) {
        if (predicate(collection[key])) {
          return collection[key];
        }
      }
    }
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    const newCollection = [];
    myEach(collection, (element, key, collection) => {
      if (predicate(element, key, collection)) {
        newCollection.push(element);
      }
    });
    return newCollection;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  const collection = [1, 2, 3] || { one: 1, two: 2, three: 3 };
  
  const newCollection = myMap(collection, (element) => element * 2);
  
  console.log(newCollection); // [2, 4, 6] || {one: 2, two: 4, three: 6}
  