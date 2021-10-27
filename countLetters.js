const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙏 🙏 🙏 Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`👀 👀 👀 Assertion Failed: ${actual} !== ${expected}`);
    
  }
};


const countLetters = function(words) {
  let lettOb = {}; //empty object to add each letter/count to
  let noSpace = words.split(' ').join(''); //takes the spaces out of the equation

  for (const letter of noSpace) { //for each letter of the words without spaces
    if (lettOb[letter]) { //if the letter is already there add one to the count
      lettOb[letter] += 1;
    } else {
      lettOb[letter] = 1;
    }
  }
  return lettOb;
};
  
let message = 'hello hello hello';

//test
assertEqual(countLetters(message)["l"],6);

//remove spaces from words
//then iterate through the letters
//count the number of occ of each letter
//return an object including the count of each letter
