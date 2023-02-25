/* 
설명 : Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'


*/
function solution(str) {
  let result = [];
  let charArr = str.split("");
  for (let i = 0; i < charArr.length; i++) {
    result.push(charArr[charArr.length - i - 1]);
  }

  return result.join("");
}

console.log(solution("world"));

console.log(solution("hello"));
console.log(solution("world"));
