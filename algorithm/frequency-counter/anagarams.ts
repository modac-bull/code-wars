/* 
Given two strings, write a functionn to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
*/

// 1. Understand the problem
// 2. Explore concrete examples
// 3. Break it down
// 4. Solve/Simplify
// 5. Look back and refactor

function validAnagaram(str1: string, str2: string) {
  if (str1.length !== str2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    console.log("key : ", key);
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
console.log(validAnagaram("same", "mesa"));
