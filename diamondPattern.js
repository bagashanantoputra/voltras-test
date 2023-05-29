function diamondGenerator(height) {
    // Calculate the middle point of the diamond.
    const middle = Math.floor(height / 2);
    
    // Use a string to accumulate the final diamond pattern, instead of logging each line separately.
    let diamondPattern = '';
  
    // Use a for loop to generate the diamond pattern line by line, from top to bottom.
    for (let i = 0; i < height; i++) {
      // Calculate the number of spaces and asterisks required for each line, and concatenate them to the diamond pattern string.
      diamondPattern += " ".repeat(Math.abs(middle - i)) + "*".repeat(height - Math.abs(middle - i) * 2) + "\n";
    }
  
    // Log the final diamond pattern string to the console.
    console.log(diamondPattern);
  }
  
  // Call the function 
  diamondGenerator(3);
  diamondGenerator(6);
  