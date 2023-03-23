/* 
설명

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

*/

export function number(array: string[]): string[] {
  const result: string[] = [];
  array.map((elem: string, idx: number) => {
    result.push(`${idx + 1}: ${elem}`);
  });

  return result;
}

/* 
export function number(array: string[]): string[]{
  return array.map((el, i) => `${i+1}: ${el}`);
}

export const number = (array: string[]): string[] => array.map((el, i) => el = `${i+1}: ${el}`)


*/
