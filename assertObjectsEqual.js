const eqObjects = require('./eqObjects')

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual,expected)) {
    console.log(`🙏 🙏 🙏 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`👀 👀 👀 Assertion Failed: ${inspect(actual)} !== ${inspect(actual)}`);
  }
};




assertObjectsEqual({ b: "2", a: "1" }, { a: '1', b: 2 });
