const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

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

const assertObjectsEqual = function(object1, object2) {
  if (eqObjects(object1, object2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${object1} === ${object2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${object1} !== ${object2}`);
  }
};

// TEST
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(assertObjectsEqual(ab, ba));