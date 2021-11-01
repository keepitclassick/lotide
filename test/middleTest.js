const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []); 
  });
  it("returns a single middle element for an array with an odd length", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); 
  });
  it("returns two middle numbers for an array with an even length", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); 
  });
});
