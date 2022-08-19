
/* 
Complete the method that takes a boolean value and return a 
"Yes" string for true, or a "No" string for false.

boolean 타입 true => "Yes"
boolean 타입 false => "No"

*/

function boolToWord( bool ){
  //...
  return bool ? 'Yes': 'No'
}



console.log(boolToWord(true))
console.log(boolToWord(false))