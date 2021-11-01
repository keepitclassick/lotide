const tail = function(arr) {
  let newArr = []; //will pass tail of array to this variable
  for (let i = 1; i < arr.length; i++) { //going through the array starting at the 2nd item or index 1
    newArr.push(arr[i]); //adding each value to the newArr array
  }
  return newArr;
};


module.exports = tail;