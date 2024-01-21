/* 
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

export function duplicateEncode(word: string) {
  const res = word.toLowerCase().split("");
  const status: { [key: string]: number } = {};
  res.forEach((c: string) => {
    Object.keys(status).includes(c) ? status[c]++ : (status[c] = 1);
  });
  const charsRes = res.map((c: string) => {
    return status[c] === 1 ? "(" : ")";
  });
  return charsRes.join("");
}
