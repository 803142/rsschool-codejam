module.exports = function sumOfOther(array) {
  return array.map(v => array.reduce((acc, cur) => acc + cur) - v);
};
