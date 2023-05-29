function removeDuplicate(arr) {
    // `Set` is used to store unique elements of any type, whether primitive values or object references. 
    // The `spread operator` creates a new array containing the elements of the `Set` 
    // Object returned by passing the input array `arr`.
    return [...new Set(arr)];
  }
  
  // Here, console.log statement calls 
  console.log("Result : ", removeDuplicate([3, 4, 4, 3, 6, 3]));
  