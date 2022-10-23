/* 

설명 : 
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100


내가 생각하는 로직
  1. ( 로 시작해야 하고
  2. ) 로 끝나야 하고
  3. ( 의 갯수와 ) 의 갯수가 같으면 됨
  4. 추가적인 조건으로 짝수일때에만 조건 함수 타도록 변경 + 반절까지 돌렸을 때 (의 갯수보다 )의 갯수가 많으면 false
  
*/


function validParentheses(parens) {
  // your code here ..
  let parensArr = parens.split('');
  let firstChar = parensArr[0];
  let lastChar = parensArr[parensArr.length - 1];
  if(parens === '') {
    return true
  }
  if(( firstChar !== '(') || ( lastChar !== ')') || ( parensArr.length % 2 !== 0 )) {
    return false
  } else { 
    console.log( parensArr.length )
    let leftParensCnt = 0;
    let rightParensCnt = 0;
    parensArr.forEach((v, i) => {
      if ( v === '(') {
        leftParensCnt++
      } else {
        rightParensCnt++
      }
    })
    if(leftParensCnt === rightParensCnt) {
      return true
    } else {
      return false
    }
  }
};




console.log(
  validParentheses('(()(())((())))')

)