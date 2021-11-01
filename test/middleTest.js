const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//testing
let one = [1]; // => []
let two = [1, 2]; // => []
//For arrays with odd number of elements, an array containing a single middle element should be returned.
let three = [1, 2, 3]; // => [2]
let five = [1, 2, 3, 4, 5]; // => [3]
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
let even = [1, 2, 3, 4];// => [2, 3]
let even2 = [1, 2, 3, 4, 5, 6]; // => [3, 4]

assertArraysEqual(middle(one),[]);
assertArraysEqual(middle(two),[]);
assertArraysEqual(middle(three),[2]);
assertArraysEqual(middle(five),[3]);
assertArraysEqual(middle(even),[2, 3]);
assertArraysEqual(middle(even2),[3, 4]);