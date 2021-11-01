const middle = function(arr) {
  let newArr = []; //empty array
  if (arr.length <= 2) {
    return newArr; //if 1-2 elements return the empty array
  } else if (arr.length % 2 === 0) {
    newArr = [arr[(arr.length / 2) - 1], arr[arr.length / 2]]; //if even return the two middle numbers
    return newArr;
  } else {
    newArr = [arr[((arr.length - 1) / 2)]]; //if odd return only one number
    return newArr;
  }
};

module.exports = middle;
