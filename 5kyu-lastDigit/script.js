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

str1 의 끝자리가 1일 경우
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
  let num1 = Number(str1)%10;
  let num2 = Number(str2)%10;
  let lastNumber = undefined;

  function lastNumber(num1, num2) {
    let 
    for(i = 0 ; i < num2 ; i++) {
      num1
    }
    return
  }
  switch(num1) {
    case 1 :
      num2%4
      break;
    case 2 :
      break;
    case 3 :
      break;
    case 4 :
      break;
    case 5 :
      break;
    case 6 :
      break;
    case 7 :
      break;
    case 8 :
      break;
    case 9 :
      break;
    case 0 :
      break;
  }

  return (str1 === '0' && str2 === '0') ? 1 :  resultNumber%10 ; // fix me
}
console.log(
  lastDigit("4", "1"),
  lastDigit("9", "7"),
  lastDigit("10", "10000000000"),
  lastDigit("1606938044258990275541962092341162602522202993782792835301376", "2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"),
  lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651")
)
