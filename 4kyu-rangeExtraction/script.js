
/* 
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'.
The range includes all integers in the interval including both endpoints.
It is not considered a range unless it spans at least 3 numbers.

For example "12,13,15-17"

Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

  solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"


문제 정의
1. 배열의 원소가 3개 이상 연속될 경우에 '-' 대시로 연결하여 표현할 것
2. 나머지는 그냥 원소로 배열
3. 최종 결과는 "string" 형태

접근 방법
1. reduce 활용해야 하는가?
  - 연속 3개 이상임을 어떻게 판별할건지?

2안 

*/

function solution(list) {
  let listArr = list;
  list.reduce((pv, cv) => {
    console.log(pv, cv)
    if((pv + 1) === cv) {
      console.log(cv, '연속된 수', pv)
    }
    return cv
  }, "")

  return list
}


console.log(
  solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]) //"-6,-3-1,3-5,7-11,14,15,17-20"
)
