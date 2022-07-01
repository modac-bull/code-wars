/* 

Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of aba^bab
 . Note that aaa and bbb may be very large!

For example, the last decimal digit of 979^797
  is 999, since 97=47829699^7 = 47829699 
7
 =4782969. The last decimal digit of (2200)2300({2^{200}})^{2^{300}}(2 
200
 ) 
2 
300
 
 , which has over 109210^{92}10 
92
  decimal digits, is 666. Also, please take 000^00 
0
  to be 111.

You may assume that the input will always be valid.

Examples
lastDigit("4", "1")            // returns 4
lastDigit("4", "2")            // returns 6
lastDigit("9", "7")            // returns 9    
lastDigit("10","10000000000")  // returns 0




1. 

str1 의 끝자리 경우의 수에 따라 다름
1 ..
2 4 8 6 ...
3 9 7 1 ...
4 6 ...
5 ...
6 ...
7 9 3 1 ..
8 4 2 6 ...
9 1 ..
0 0 0

*/

var lastDigit = function(str1, str2){  
  let gab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((pv, cv) => {
    return cv*pv
  }, 1)
  let num1 = Number(str1.split('')[str1.split('').length - 1]);
  let num2 = undefined;
  if (Number(str2) > Number.MAX_SAFE_INTEGER) {
    // 15 자릿수 이하로 떨어지게 처리하는 방안을 모르겠는데요..?
    console.log(gab, "초과")
  } else {
    return Number(str2)%gab;
  }
  const tableOrder = {
    0: [0],
    1 : [1],
    2 : [2, 4, 8, 6],
    3 : [3, 9, 7, 1],
    4 : [4, 6],
    5 : [5],
    6 : [6],
    7 : [7, 9, 3, 1],
    8 : [8, 4, 2, 6],
    9 : [9, 1]
  }

  console.log(str1, num2)
  
  function lastNumber(num1, num2) {
    let repeatArr = tableOrder[num1];

    if(num2%(repeatArr.length) === 0) {
      return repeatArr[repeatArr.length - 1]
    } else {
      return repeatArr[num2%repeatArr.length - 1]
    }
  }

  if( Number(str2) == 0) {
    return 1
  } else {
    return lastNumber(num1, num2)
  }
}

console.log((68819615221552997273737174557165657483427362207517952651)%4);

console.log(
  lastDigit("4", "1"),
  lastDigit("4", "2"),
  lastDigit("3", "2"),
  lastDigit("9", "7"),
  lastDigit("0", "0"),
  lastDigit("23", "0"),
  lastDigit("10", "10000000000"),
  lastDigit("1606938044258990275541962092341162602522202993782792835301376", "2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"),
  lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651")
)
