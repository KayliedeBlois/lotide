//Input: (object, callback)
//Output: return the first key for which the callback returns a truthy value
//if no key is found, it should return undefined

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key; 
    }
  }
}; 


//TEST CASES

let object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}
console.log(findKey(object1, x => x.stars === 2));  // => "noma"


const assertEqual = function(actual, expected) {
  if (actual ===  expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TEST
assertEqual(findKey(object1, x => x.stars === 2), "noma"); 