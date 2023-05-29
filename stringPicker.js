function stringPicker(str) {
    // Regular expression to match the desired substrings: 
    // g - global flag, to find all matches
    const regex = /\${(?:[^}]+)}/g;
    
    // Find all matches of the regular expression in the input string and return them
    return str.match(regex)?.map(match => match.slice(2, -1)) ?? [];
  }
  
  const arg = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur sagittis risus ${PRICE}, sed finibus ante ornare a. Donec a dolor ultricies, bibendum eros in ${Ticket 09}, commodo nibh. Morbi eget dui facilisis, imperdiet quam vitae, faucibus sem.";
  
  const test = stringPicker(arg);
  console.log(test);
  