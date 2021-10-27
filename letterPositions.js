
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


const letterPositions = function(sentence) {
  const results = {};
  //sentence = sentence.split(' ').join('');

  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter !== ' ') { //if the letter is not a space continue to check if it is already included in the results
      if (!results[letter]) {
        results[letter] = [i]; //if it's not, add it and the value
      } else {
        results[letter].push(i); //if it is, push the next value to be included under the same letter
      }
    }
  }
  return results;
};

console.log(letterPositions('lighthouse in the house'));
/*return all the indices (zero-based positions) in the string where each character is found.
For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.
*/
assertArraysEqual(letterPositions("hello").l, [2,3]);