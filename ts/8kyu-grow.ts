/* 
설명
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/

export function grow(arr: number[]): number {
  return arr.reduce((pv, cv) => {
    return pv * cv;
  });
}

/* 
export const grow = (arr: number[]) => arr.reduce((accum, it) => accum * it);

export function grow(arr: number[]) {
  return arr.reduce((prev,curr) => prev * curr);
}


export const grow = (arr: number[]): number => arr.reduce((a, b) => a * b, 1);
*/
