/* 
설명
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
*/
export function past(h: number, m: number, s: number): number {
  //#Happy Coding! ^_^
  const hoursToMs = h * 60 * 60 * 1000;
  const minutesToMs = m * 60 * 1000;
  const secondsToMs = s * 1000;

  return hoursToMs + minutesToMs + secondsToMs;
}

console.log(past(0, 1, 1));
console.log(past(1, 1, 1));
console.log(past(1, 0, 1));
console.log(past(0, 0, 0));

/* 
const seconds = (s: number) => s * 1000;
const minutes = (m: number) => m * seconds(60);
const hours = (h: number) => h * minutes(60);

export function past(h: number, m: number, s: number): number {
  return hours(h) + minutes(m) + seconds(s);
}


export function past(h: number, m: number, s: number): number {
  return (h*3600+m*60+s)*1000
}

export const past = (h: number, m: number, s: number): number => (h * 3600 + m * 60 + s) * 1000;

export function past(h: number, m: number, s: number): number {
  h = h * 60 * 60 * 1000
  m = m * 60 * 1000
  s = s * 1000
  return +(h + m + s)
}

*/
