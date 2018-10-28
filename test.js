/* eslint-env mocha */

const assert = require('assert');

Object.freeze(assert);
const getSumOfOther = require('./sumOfOther');

describe('Arrays', () => {
  it('0', () => {
    const sumOfOther = getSumOfOther([2, 3, 4, 1]);
    assert.deepEqual(sumOfOther, [8, 7, 6, 9]);
  });
});
