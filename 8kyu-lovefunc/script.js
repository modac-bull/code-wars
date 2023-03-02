/* 
설명 : Timmy & Sarah think they are in love, but around where they live, they
        will only know once they pick a flower each. If one of the flowers has
        an even number of petals and the other has an odd number of petals it
        means they are in love. Write a function that will take the number of
        petals of each flower and return true if they are in love and false if
        they aren't.

    참
    짝수 / 홀수
    홀수 / 짝수

    거짓
    짝수 / 짝수 
    홀수 / 홀수
    
*/
function lovefunc(flower1, flower2) {
  // moment of truth
  let isEvenfFlower1 = flower1 % 2 ? false : true;
  let isEvenfFlower2 = flower2 % 2 ? false : true;

  return isEvenfFlower1 === isEvenfFlower2 ? false : true;
}

console.log(lovefunc(1, 4));
console.log(lovefunc(2, 2));
console.log(lovefunc(0, 1));
console.log(lovefunc(0, 0));
