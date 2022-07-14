
/* 
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/


/* 
1. 띄어쓰기를 기준으로 단어 단위로 배열을 반환
2. 각 배열의 원소 값의 시작값 대문자로 변경
2-1. 소문자일 경우 => 대문자로 (정규표현식 활용 필요해보임)
2-2. 대문자일 경우 그대로

(예외)
- 결과값이 140글자 이상일 경우엔 false 반환
- 인풋 또는 결과값이 빈문자열일 경우 false 반환

*/


function generateHashtag (str) {
  if (typeof str == undefined || str == null || str.length == 0 || str == " ") {
    return false
  }
  let charArr = str.split(' '); 
  

  let resultArr = charArr.map((word, i) => {
    let firstCodeNum = word.charCodeAt(0); 
    if (firstCodeNum >= 97 && firstCodeNum <= 122) {
      let outputArr = word.split('')
      outputArr.shift()
      outputArr.unshift(String.fromCharCode(firstCodeNum - 32))
     
      return outputArr.join('')
    } else {
      return word
    }
  })
  if(resultArr.join('').length >= 140) {
    return false
  }
  return '#' + resultArr.join('');
}


console.log(
  generateHashtag(" "),
  generateHashtag("     "),
  generateHashtag("Do We have A Hashtag"),
  generateHashtag("Codewars"),
  generateHashtag("Codewars Is Nice"),
  generateHashtag("Codewars is nice"),
  generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")
)