
/* 
The rgb function is incomplete. 
Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. 
Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3


*/

function rgb(r, g, b){
  // complete this function  
  function makeHex(number) {
    // 각 자릿수 16진법 자리 '문자열'로 표현
    const hexCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    if(number < 0) { // 음수일 때에는 '00' 반환
      return '00'
    } else if (number >= 0 && number < 255){
      let firstOrder = hexCode[Math.floor(number/16)]; // 왼쪽에서 첫째 자리 
      let lastOrder = hexCode[number%16] // 왼쪽에서 두번째 자리
      return firstOrder + lastOrder // 문자열로 반환
    } else { // 255 이상일 때에는 'FF' 반환
      return 'FF'
    }
  }
  return makeHex(r) + makeHex(g) + makeHex(b)
}

console.log(rgb(0, 0, -20))
// console.log(rgb(255, 255, 255));
// console.log(rgb(0, 0, 0));