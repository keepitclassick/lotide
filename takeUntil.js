
/*const eqArrays = function(arr1,arr2) {
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
}; */


const takeUntil = function(array, callback) {
  let newArr = []; //empty array
  for (const index in array) { //checking every index of the array
    if (callback(array[index]) === true) { //if callback func returns true
      newArr = array.slice(0,index); //slice the array and return the new array
    }
  }
  return newArr;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]
);