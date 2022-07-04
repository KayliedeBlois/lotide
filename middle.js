const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;