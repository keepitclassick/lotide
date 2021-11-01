const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙏 🙏 🙏 Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`👀 👀 👀 Assertion Failed: ${actual} !== ${expected}`);
  }
};



//It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(object,val) {
 
  let keysArr = Object.keys(object);
  let valsArr = Object.values(object);

  for (let i = 0; i < keysArr.length; i++) {
    for (let x = 0; x < valsArr.length; x++) {
      if (val === valsArr[i]) {
        return keysArr[i];
      }
    }
  }
};

module.exports = findKeyByValue


/*const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};*/

const bestTVShowsByGenre = {
  sciFi: "gremlins",
  comedy: "Futurama",
  drama:  "Breaking Bad"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "Breaking Bad"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "gremlins"), "sciFi");

