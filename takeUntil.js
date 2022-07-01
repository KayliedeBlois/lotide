//Input: to parameters (array, callback function)
//callback is provided 1 value; the item in the array 
//Output: a slice of the array with elements take from the beginning
//it should keep going until the callback returns a TRUTHY value 

const takeUntil = function(array, callback) {
  const results = []; 
  for (let item of array) {
    if(callback(item)) return results;
    results.push(item); 
  }
}; 

// TEST CASES
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

// EXPECTED OUTPUT 
// console.log(results2);[ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

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

assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ] ); 
assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]); 