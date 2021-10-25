const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙏 🙏 🙏 Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`👀 👀 👀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let newArr = []; //will pass tail of array to this variable

const tail = function(arr) {
  for (let i = 1; i < arr.length; i++) { //going through the array starting at the 2nd item or index 1
    newArr.push(arr[i]); //adding each value to the newArr array
  }
  return newArr;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!eed to capture the return value since we are not checking it
