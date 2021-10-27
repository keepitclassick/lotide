const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙏 🙏 🙏 Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`👀 👀 👀 Assertion Failed: ${actual} !== ${expected}`);
    
  }
};
//allItems ->array of strings to look through
//itemsToCount -> specifies what to count
const countOnly = function(allItems,itemsToCount) {
  const results = {};
  for (const item of allItems) {
    console.log(item);
    //inside the loop,
    //increment the counter for each item:
    //set a property with that string key to:
    //the value that was already there (or zero if nothing there) with 1 added to it.
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};
//EDGE case---All other strings (either set to false or not included at all in the object) should not be counted. That said, if a particular string is meant to be counted but does not exist in the input array (like "f" in the example above), it also does not have to be included in the final count.

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);