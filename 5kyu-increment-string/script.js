
/* 
String incrementer

Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
-> 문자열이 숫자로 끝나면 +1

If the string does not end with a number. the number 1 should be appended to the new string.
-> 숫자로 끝나지 않을 경우엔 숫자 1을 뒤에 붙인다.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.


*/


function incrementString (strng) {
  // return incrementedString

  let charArr = strng.split('')
  let lastChar = charArr[charArr.length -1 ]; // 마지막 글자
  let prevLastChar = charArr[charArr.length - 2]; // 마지막 글자 이전
  const regNumber = /[0-9]/; // 숫자 정규식 표현 -> 자세히 알아봐야 함
  const regGroupNumberStartZero = /(0)+\d$/g; // 0묶음?
  const reglastNumber = /\d$/g; // 0묶음?
  const regNumberNine = /[9]$/; // 9포함?
  let isLastNumber = strng.match(reglastNumber)
  let isLastNumberStartZero = strng.match(regGroupNumberStartZero);
  
  if (isLastNumber) { // 문자열 마지막이 숫자묶음
    // console.log(isNumberZeroStart, prevLastChar);
    if (isLastNumberStartZero) { // 숫자부분이 0으로 시작
      if (strng.match(regNumberNine)) { // 끝자리가 9

      } else { // 끝자리가 9가 아님
        let zerocnt = isLastNumberStartZero[0].length;
        let lastChar = [];
        for(i=0;i<zerocnt-1;i++) {
          lastChar.push(0)
        }
        lastChar.push(Number(isLastNumberStartZero[0][isLastNumberStartZero[0].length-1])+1)
        console.log(strng, zerocnt, lastChar.join(''))
        return strng.replace(isLastNumberStartZero, `${lastChar.join('')}`)

      }

    } else { // 숫자부분이 0으로 시작하지 않음
      console.log(strng, '0으로 시작하지 않음', isLastNumber)
      return strng.replace(isLastNumber, `${Number(isLastNumber) + 1}`) 
    }

    
  } else { // 문자열 마지막이 숫자 X
    console.log(strng, '문자열로 끝남')
    return strng+"1"
  }
}


console.log(

  incrementString("foobar000"),
  incrementString("foobar"),
  incrementString("foobar9"),
  incrementString("foobar099"),
  incrementString("foobar000004"),
  incrementString("foo2bar423"),
);
