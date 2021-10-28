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


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const words = ["ground", "control", "to", "major", "tom"];
const animals = ['dog', 'cat', 'frog', 'bat'];
const people = ["bill","bob","sue"];
const numbers = [1,2,3,4,5];

const results1 = map(words, word => word[0]);
const results2 = map(animals, word => word + 's');
const results3 = map(people, word => word + ' is the coolest!');
const results4 = map(numbers, word => word * 5);
console.log(results4);

assertArraysEqual(results1,['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2,['dogs','cats', 'frogs', 'bats']);
assertArraysEqual(results3,['bill is the coolest!','bob is the coolest!', 'sue is the coolest!']);
assertArraysEqual(results4,[ 5, 10, 15, 20, 25 ]);