/* 
설명 : 
Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

1. 빈 배열 A 생성
2. 입력 배열 map 0이 아니면 빈 배열 A에 push
3. 입력 배열 map 0이면 갯수 카운트 하고
4. 갯수만큼 A 배열 뒤에다가 push

*/
function moveZeros(arr) {
  let reulstArr = [];
  let zeroCnt = 0;
  arr.map((v) => {
    if (v !== 0) {
      reulstArr.push(v);
    } else zeroCnt++;
  });
  for (let i = 0; i < zeroCnt; i++) {
    reulstArr.push(0);
  }
  return reulstArr;
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

// SORT by Clever
/* 
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}
*/

/* 
var moveZeros = function (arr) {
  return [
    ...(arr.filter(n => n !== 0)),
    ...(arr.filter(n => n === 0))
  ];
}
*/

/* 
var moveZeros = function (arr) {
  var filtedList = arr.filter(function (num){return num !== 0;});
  var zeroList = arr.filter(function (num){return num === 0;});
  return filtedList.concat(zeroList);
}
*/
