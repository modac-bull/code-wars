/* 
Your goal in this kata is to implement a difference function, 
which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

array_diff({1, 2}, 2, {1}, 1, *z) == {2} (z == 1)
If a value is present in b, all of its occurrences must be removed from the other:

array_diff({1, 2, 2, 2, 3}, 5, {2}, 1, *z) == {1, 3} (z == 2)

*/

export function arrayDiff(a: number[], b: number[]): number[] {
  let result: number[] = [];
  a.map((v: number) => {
    if (!b.includes(v)) {
      result.push(v);
    }
  });
  return result;
}

/* 
export function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter(e => !b.includes(e));
}

export function arrayDiff(a: number[], b: number[]): number[] {
  const bSet = new Set(b);
  return a.filter( value => !bSet.has(value) );
}


export const arrayDiff = (a: number[], b: number[]): number[] => a.filter(x => !b.includes(x))
*/



// export function arrayDiff(a: number[], b: number[]): number[] {
//   return a.filter((v: number) => {
//     return !b.includes(v)
//   });
// }