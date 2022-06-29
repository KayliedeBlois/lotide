const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
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
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

// Middle
// In: array
// Out: middle of array
// if 1 or 2 elements in array, output empty array
// if odd number of elements, output array with single middle element
// if even number of elements outsingle array with two middle elements

const middle = function(array) {
  let i = (array.length / 2); // returns second "middle" value
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return array.slice(i-1, i+1); 
  } else if (array.length % 2 === 1) {
    return array.slice(Math.floor(i), Math.floor(i+1));
  }
};

// TEST CODE
console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5, 6]));