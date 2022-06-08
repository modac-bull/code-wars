console.log("script!")

function likes(names) {
  // TODO
  let arrLength = names.length;
  let result = undefined;

  switch(arrLength) {
    case 0 :
      result = 'no one likes this';
      break;
    case 1:
      result = `${names[0]} likes this`
      break;
    case 2:
      result = `${names[0]} and ${names[1]} like this`
      break;
    case 3:
      result = `${names[0]}, ${names[1]} and ${names[2]} like this`
      break;
    default :
      result = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
      break;
  }
  return result;
}

console.log(

  likes([]),
  likes(["Peter"]),
  likes(["Jacob", "Alex"]),
  likes(["Max", "John", "Mark"]),
  likes(["Alex", "Jacob", "Mark", "Max"]),
)


/* 
expected results
[]-- > "no one likes this" 
["Peter"]-- > "Peter likes this" 
["Jacob", "Alex"]-- > "Jacob and Alex like this" 
["Max", "John", "Mark"]-- > "Max, John and Mark like this" 
["Alex", "Jacob", "Mark", "Max"]-- > "Alex, Jacob and 2 others like this"
*/