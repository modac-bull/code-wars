/* 
Move the first letter of each word to the end of it, then add "ay"
to the end of the word.Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !'); // elloHay orldway !
*/


// function pigIt(str) {
//   //Code here

//   // 1. 문자 뭉치로 배열 변환
//   let wordArr = str.split(' ');
//   console.log(wordArr);

//   // 2. 단어 => 첫번째 문자열 빼서 뒷쪽에 넣기
//   let outputArr = [];
//   wordArr.forEach(element => {
//     if( element !== '!') { 
//       let Arr = element.split('');
//       let firstElem = Arr.shift();
//       Arr.push(firstElem+'ay');
//       console.log(Arr);
//       // console.log(element.split('').shift())
//       outputArr.push(Arr.join(''))
//       // return Arr.join('')
//     } else {
//       outputArr.push(element)
//     }
//   });

//   console.log(outputArr)
//   function makeUgly(word) {
//     // return word.split('').unshift().;
    
//   }

//   return outputArr.join(' ')
// }

// console.log(pigIt('Hello world !'));




/* 리팩토링 */
/* 
Move the first letter of each word to the end of it, then add "ay"
to the end of the word.Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !'); // elloHay orldway !
*/


function pigIt(str) {
  //Code here
  let wordArr = str.split(' ');

  let outputArr = [];
  wordArr.forEach(element => {
    const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g; 
    if (!element.match(regExp)) {
      let Arr = element.split('');
      let firstElem = Arr.shift();
      Arr.push(firstElem + 'ay');
      outputArr.push(Arr.join(''))
    } else {
      outputArr.push(element)
    }
  });
  return outputArr.join(' ')
}

console.log(pigIt('Hello world !'));
