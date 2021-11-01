const eqArrays = function(arr1,arr2) {
  let i = arr1.length;
  if (i !== arr2.length) return false; //compare lengths and return false if they aren't the same
  while (i--) {
    if (arr1[i] !== arr2[i]) return false; //loop backwards on both arrays and compare values, return false when one doesn't match
  }
  return true; 
};

module.exports = eqArrays;
