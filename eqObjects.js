const eqArrays = function(arr1,arr2) {
  let i = arr1.length;
  if (i !== arr2.length) return false;
  while (i--) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙏 🙏 🙏 Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`👀 👀 👀 Assertion Failed: ${actual} !== ${expected}`);
    
  }
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  object1 = Object.keys(object1);
  object2 = Object.keys(object2);

if (object1.length !== object2.length){ //if lengths are not same return false
  return false;
} else {
  for (const keys in object1) {
    if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) { //if both are arrays run eqArrays
    if (eqArrays(object1[keys],object2[keys]) === false){ //if eqArrays is false, return false
    return false;
    } else if (object1[keys] !== object2[keys]) { //if any of the keys do not match return false
      return false;
    }
    }
  }
}
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

assertEqual(eqObjects(ab,ba),true)
assertEqual(eqObjects(ab,abc),false)