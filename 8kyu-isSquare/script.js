/* 
설명 : The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false


*/



var isSquare = function(n){
  return n < 0 ? false : !(Math.sqrt(n)%10).toString().includes('.')
}

console.log(isSquare(-1))
console.log(isSquare(0))
console.log(isSquare(3))
console.log(isSquare(9))
console.log(isSquare(25))

/* 
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

const isSquare = n => Number.isInteger(Math.sqrt(n));

var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n));
}

const isSquare = n => Math.sqrt(n) % 1 === 0

*/