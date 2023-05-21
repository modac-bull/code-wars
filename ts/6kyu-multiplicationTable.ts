/* 
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
ARRAYSFUNDAMENTALS

n X n 행렬 만들기

1. n번 반복하는 동안에 (v, i)
2. 1 ~ n까지의 배열 만들기 (v2, i2)




*/

export function multiplicationTable(size: number): number[][] {
  // Implement me! :)

  let Array: number[][] = [];

  for (let i = 0; i < size; i++) {
    console.log("i", i);
    let nthArray: number[] = [];
    for (let i2 = 0; i2 < size; i2++) {
      console.log("i2", i2);
      nthArray.push((i2 + 1) * (i + 1));
    }
    Array.push(nthArray);
  }

  return Array;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(2));
console.log(multiplicationTable(3));

/* 
export const multiplicationTable = (size: number): number[][] => {
  const result = [];
  for (let i = 1; i <= size; i++) {
    const resultSubArr = [];
    for (let j = 1; j <= size; j++) {
      resultSubArr.push(i * j);
    }
    result.push(resultSubArr);
  }
  return result;
};

export function multiplicationTable (size: number): number[][] {
  return [...Array(size)].map((_, i) => [...Array(size)].map((_, j) => (i + 1) * (j + 1)))
}

export function multiplicationTable (size: number): number[][] {
    return Array.from({length: size}, (v,i) => Array.from({length: size}, (_,j) => (i+1)*(j+1)) )
}

*/
