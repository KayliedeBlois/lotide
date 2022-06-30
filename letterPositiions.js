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

const letterPositions = function(sentence) {
  const results = {}; 
  const sentenceLowerCase = sentence.toLowerCase(); 

  for (let i = 0; i < sentenceLowerCase.length; i++){
    if(!results[sentenceLowerCase[i]]) {
      results[sentenceLowerCase[i]] = [i];
    } else {
      results[sentenceLowerCase[i]].push(i);  
    }
  }
  return results; 
}; 

// need to push to array
// need array for each letter in the sentence
// skip spaces (ie no array for spaces)


console.log(letterPositions("hello")); 