function diamondGenerator(height) {
    // Calculate the middle point of the diamond by dividing the height by 2 and rounding it down using Math.floor() method.
    const middle = Math.floor(height / 2);
    // Use a for loop to generate the diamond pattern line by line, from top to bottom.
    for (let i = 0; i < height; i++) {
      // Calculate the number of spaces required for each line using absolute difference between middle value and current index.
      const spaces = Math.abs(middle - i);
      // Calculate the number of asterisks '*' required for each line using a formula involving spaces and height of diamond.
      const stars = height - spaces * 2;
      // Log each line to the console, with appropriate number of spaces and asterisks.
      console.log(" ".repeat(spaces) + "*".repeat(stars));
    }
  }
  
  // Call the function
  diamondGenerator(5); 
  diamondGenerator(6); 
