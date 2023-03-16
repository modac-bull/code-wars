/* 
설명 : Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


*/

function findOdd(A) {
  //happy coding!

  let setA = Array.from(new Set(A));

  let cntSetArr = [];
  setA.forEach((elem, idx) => {
    let cnt = 0;
    A.map((elem2, idx2) => {
      if (elem === elem2) {
        cnt++;
      } else {
        cnt;
      }
      cntSetArr[idx] = cnt;
    });
  });

  let setIdx = null;
  cntSetArr.map((elem, idx) => {
    if (elem % 2 !== 0) {
      setIdx = idx;
    }
  });

  return setA[setIdx];
}

console.log(
  findOdd([7]),
  findOdd([0]),
  findOdd([1, 1, 2]),
  findOdd([0, 1, 0, 1, 0]),
  findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])
);
