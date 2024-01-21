/* 
Implement a function called countUniqueValues, which accepts a sorted array, 
and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
*/

function countUniqueValues(arr: number[]) {
  if(arr.length === 0) return 0;
  let i = 0;
  let j = 1;
  let count = 1;
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      count++;
      i = j;
    }
  }
  return count;
}

console.log(countUniqueValues([1, 2]));
