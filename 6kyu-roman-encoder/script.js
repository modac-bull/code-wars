// Roman Numerals Encoder
// 1 ~ 3999 까지 표현가능

function solution(number) {
  // convert the number to a roman numeral
  // 1. 들어오는 숫자 배열로 변환
  // 1923 -> ['1', '9' , '2', '3'];
  // 2. 일의자리 숫자부터 천의자리 숫자까지 변환
  let inputArr = number.toString().split('');
  let one = 'I',
    five = "V",
    ten = "X",
    fifty = "L",
    hundred = "C",
    fiveHundred = "D",
    thousand = "M"

  let backwardsArr = [];
  // 2. 배열 순서 변환
  for (i = 0; i < inputArr.length; i++) {
    backwardsArr.push(inputArr[inputArr.length - 1 - i])
  }
  charArrange = function (number, input1, input2, input3) {
    switch (number % 10) {
      case 0:
        return '';
        break;
      case 1:
        return input1
        break;
      case 2:
        return input1 + input1
        break;
      case 3:
        return input1 + input1 + input1
        break;
      case 4:
        return input1 + input2
        break;
      case 5:
        return input2
        break;
      case 6:
        return input2 + input1
        break;
      case 7:
        return input2 + input1 + input1
        break;
      case 8:
        return input2 + input1 + input1 + input1
        break;
      case 9:
        return input1 + input3
        break;

    }
  }

  let result = [];
  backwardsArr.forEach(function (v, i) {
    switch (i) {
      case 0: // 1의 자리
        result.push(charArrange(v, one, five, ten));
        break;
      case 1: // 10의 자리
        result.push(charArrange(v, ten, fifty, hundred));
        break;
      case 2: // 100의 자리
        result.push(charArrange(v, hundred, fiveHundred, thousand));
        break;
      case 3: // 1000의 자리
        result.push(charArrange(v, thousand, '', ''));
        break;
    }
  })
  let backResultArr = [];
  // 4. 최종 결과 배열 순서 변환
  for (i = 0; i < result.length; i++) {
    backResultArr.push(result[result.length - 1 - i])
  }
  return backResultArr.join('')
}

console.log(
  solution(39)

)