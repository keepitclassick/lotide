
const eqArrays = function(arr1,arr2) {
  let i = arr1.length;
  if (i !== arr2.length) return false;
  while (i--) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2) === true) { //if running eqArrays returns true
    console.log(`🙏 🙏 🙏 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`👀 👀 👀 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) { //going through each word 
    if (source[i] !== itemsToRemove) { //if the word is not the same as the one to be removed, add it to the new array
      newArr.push(source[i]);
    }
  }
  return newArr;
};


const words = ["hello", "world", "lighthouse"];
without(words, "lighthouse"); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without