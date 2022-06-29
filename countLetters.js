const assertEqual = function(actual, expected) {
  if (actual ===  expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let countObject = {}; 
  const removeSpaces = string.split(" ").join("")
  const stringLowerCase = removeSpaces.toLowerCase(); 
  for (let val of stringLowerCase) { 
    if (!countObject[val]) {
      countObject[val] = 1; 
    } else {
      countObject[val]++; 
    }
    //console.log(countObject);
  }
  console.log(countObject);
  return countObject; 
   
 }; 

 countLetters("lighthouse in the house"); 
