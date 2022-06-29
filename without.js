const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++){
    if (array1[i] !== array2[i]) {
      return false; 
    } 
  }
  return true;
}; 

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`); 
  } else { 
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`)
  }
};  

// without returns a subset of a given array, removing unwanted items
// parameters (array, itemsToRemove) --> returns a NEW array 
// with only those present in array and not in itemsToRemove

const without = function (array, itemsToRemove) {
  let item = 0;
  const newArray = array.filter(item => !itemsToRemove.includes(item)); 
  return newArray; 
}; 

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
// console.log(without(words, ["lighthouse"]));
// Testing without function returns new array 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);