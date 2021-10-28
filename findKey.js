
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙏 🙏 🙏 Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`👀 👀 👀 Assertion Failed: ${actual} !== ${expected}`);
    
  }
};

const findKey = (data, callback) => {
  let newArr = Object.keys(data); //array of keys
  for (const item of newArr) { //loop items
    if (callback(data[item]) === true) { //if the value is true return the name of the item
      return item;
    }
  }
};


let object = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 },
};
let object2 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 4 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 6 },
  "Akelarre":  { stars: 3 },
};
let result = (findKey(object, x => x.stars === 2));
let result2 = (findKey(object2, x => x.stars === 2));

assertEqual(result, 'noma');
assertEqual(result2, undefined);