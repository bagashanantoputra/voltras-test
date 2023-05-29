function ifForbidden(a, b) {
  // Comparison of numbers results in boolean values, 
  const result = ["equal", "greater than", "smaller than"][(a > b) - (a < b) + 0];
  // return a template string with the original numbers and the result of their comparison
  return `${a} is ${result} ${b}`;
}

// Call the function with some sample arguments and log the results to the console
console.log(ifForbidden(5, 4)); 
console.log(ifForbidden(-4, -7)); 
console.log(ifForbidden(2, 2));