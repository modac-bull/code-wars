/* 
ROT13
How can you tell an extrovert from an introvert at NSA ? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl 'f fubrf.

I found this joke on USENET, but the punchline is scrambled.Maybe you can decipher it ? According to Wikipedia, 
ROT13(http: //en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

Hint: For this task you 're only supposed to substitue characters. Not spaces, punctuation, numbers etc.

Test examples:

"EBG13 rknzcyr."-- >
"ROT13 example."

"This is my first ROT13 excercise!"-- >
"Guvf vf zl svefg EBG13 rkprepvfr!"

Input ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
Output NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm


ASCII 코드
1. 65~77 -> 78~90 (+13)
2. 97~109 -> 110~122 (+13)

++ 정리 필요한 부분
- ASCII 코드 변환 문자열 <-> 아스키코드
*/


function rot13(str) {
  let charArr = str.split('');
  let resultArr =   charArr.map((v, i) =>{
    let asciChar = v.charCodeAt()
    if(asciChar >= 65 && asciChar <=77) {
      asciChar+=13;
      let char = String.fromCharCode(asciChar)
      return char;
    } else if( asciChar >= 78 && asciChar <= 90) {
      asciChar -= 13;
      let char = String.fromCharCode(asciChar)
      return char;
    } else if (asciChar >= 97 && asciChar <= 109) {
      asciChar += 13;
      let char = String.fromCharCode(asciChar);
      return char;
    } else if (asciChar >= 110 && asciChar <= 122) {
      asciChar -= 13;
      let char = String.fromCharCode(asciChar);
      return char;
    } else {
      let char = v
      return char;
    }
  })
  return resultArr.join('')
}

console.log(
  
 rot13("EBG13 rknzcyr.")
)