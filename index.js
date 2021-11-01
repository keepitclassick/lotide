const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual')
const assertEqual = require('./assertEqual')
const eqArrays = require ('../lotide/eqArrays')
const eqObjects = require('./eqObjects')
const countLetters = require('./countLetters')
const countOnly = require('./countOnly')
const findKey = require('./findKey')
const findKeyByValue = require('./findKeyByValue')
const letterPositions = require('./letterPositions')
const map = require('./map')
const takeUntil = require('./takeUntil')
const without = require('./without')
const assertObjectsEqual = require('./assertObjectsEqual')

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual,
  assertEqual,
  eqArrays,
  eqObjects,
  countLetters,
  countOnly,
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  takeUntil,
  without,
  assertObjectsEqual
};