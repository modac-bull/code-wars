/* 

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) 
e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8


1행  1
2행 2 , 3
3행 4 , 5 , 6
4행 7, 8, 9, 10
...

N행 시작 숫자 = N^2 - (N - 1)

예) 5행 = 5^2 - (5 - 1) = 21부터 홀수 N개


*/

function rowSumOddNumbers(n) {
	// TODO
  let oddArr = [];
  let firstNum = Math.pow(n, 2) - (n - 1);

  for(i=0; i < n ; i++) {
    console.log(i)
    oddArr.push(firstNum);
    firstNum += 2;
  }
  return oddArr.reduce((pv, cv) => { return pv + cv}, 0);

}





console.log(
  rowSumOddNumbers(3),
  rowSumOddNumbers(5)
  )