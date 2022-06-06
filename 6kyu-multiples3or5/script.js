console.log("script!")


// 3 또는 5의 배수의 합 
/* 
solution(20)
3, 6, 9, 12, 15, 18 
5, 10, 15
15

3의 배수 합 + 5의 배수 합 - 15의배수 합
*/


function solution(number) {
  function makeMultiplesArr(multiple, inputNumber) {
    let outputArr = [];
    if(inputNumber%multiple === 0) {
      for( i = 0 ; i < Math.floor(inputNumber/multiple) - 1 ; i++) {
        outputArr.push(multiple*(i + 1));
      }
    } else {
      for( i = 0 ; i < Math.floor(inputNumber/multiple) ; i++) {
        outputArr.push(multiple*(i + 1));
      }
    }
    return outputArr
  }
  let threeMultiplesArr = makeMultiplesArr(3, number);
  let fiveMultiplesArr = makeMultiplesArr(5, number);
  let fifteenMultplesArr = makeMultiplesArr(15, number);
  function sumArr(arr) {
    return arr.reduce((pv, cv) => {
      return pv + cv
    }, 0)
  }
  return sumArr(threeMultiplesArr) + sumArr(fiveMultiplesArr) - sumArr(fifteenMultplesArr)
}


console.log(solution(10))