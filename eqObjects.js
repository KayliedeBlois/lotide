const assertEqual = function(actual, expected) {
  if (actual ===  expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++){
    if (array1[i] !== array2[i]) {
      return false; 
    } 
  }
  return true;
}; 

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

//conditions - check if different number of keys
//           - check if keys are arrays, use eqArrays to compare
//           - check if keys are the same
const eqObjects = function(object1, object2) {
  for (let key in object1) {
    if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
    } else if ((Array.isArray(object1[key]) && (Array.isArray(object2[key]))) && (object1[key].length === object2[key].length)) {
      eqArrays(object1[key], object2[key]); 
    } else if (object1[key] !== object2[key]) {
        return false; 
    } 
  } return true;
}; 


// TEST CASES 
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

// const ac = { a: "1", c: "2" }; 
// eqObjects(ab,ac); // => false 

// assertEqual(eqObjects(ab, ba), true); 
// assertEqual(eqObjects(ab, abc), false); 
// assertEqual(eqObjects(ab, ac), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true


// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false

// assertEqual(eqObjects(cd, dc), true); 
// assertEqual(eqObjects(cd, cd2), false); 