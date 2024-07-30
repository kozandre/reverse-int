module.exports = function reverse (n) {
  const numStr = String(n);
  let result = numStr;
  if (numStr.startsWith('-')) {
    result = numStr.slice(1);
  } else if (numStr.endsWith('0')) {
    result = numStr.slice(0, -1);
  }
  return result.split('').reverse().join('');
}
