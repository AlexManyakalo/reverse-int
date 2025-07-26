module.exports = function reverse(n) {
  let reverseNum = n;
  if (n < 0) reverseNum *= -1;
  return reverseNum.toString().split('').reverse().join('');
};
