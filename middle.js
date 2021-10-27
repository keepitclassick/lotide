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

const middle = function(arr) {
  let newArr = []; //empty array
  if (arr.length <= 2) {
    return newArr; //if 1-2 elements return the empty array
  } else if (arr.length % 2 === 0){
    newArr = [arr[(arr.length / 2) - 1], arr[arr.length /2]]; //if even return the two middle numbers
    return newArr;
  } else {
    newArr = [arr[((arr.length -1) / 2)]]; //if odd return only one number 
    return newArr;
  }
};

//testing
let one = [1] // => []
let two = [1, 2] // => []
//For arrays with odd number of elements, an array containing a single middle element should be returned.
let three = [1, 2, 3] // => [2]
let five = [1, 2, 3, 4, 5] // => [3]
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
let even = [1, 2, 3, 4]// => [2, 3]
let even2 = [1, 2, 3, 4, 5, 6] // => [3, 4]

assertArraysEqual(middle(one),[]);
assertArraysEqual(middle(two),[]);
assertArraysEqual(middle(three),[2]);
assertArraysEqual(middle(five),[3]);
assertArraysEqual(middle(even),[2, 3]);
assertArraysEqual(middle(even2),[3, 4]);
