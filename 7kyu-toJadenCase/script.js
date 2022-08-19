
String.prototype.toJadenCase = function () {
  const strArr = this.split(' ')
  const resultArr = [];
  strArr.forEach((word) => {
    const wordArr = word.split('');
    const upFirstWord = wordArr[0].toUpperCase()
    wordArr[0] = upFirstWord
    resultArr.push(wordArr.join(''))
  })
  return resultArr.join(' ')
};

str = "How can mirrors be real if our eyes aren't real";

console.log(
  str.toJadenCase()
)