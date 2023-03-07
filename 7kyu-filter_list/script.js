/* 
설명 : In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


LISTS FILTERING DATA STRUCTURES FUNDAMENTALS
*/
const Zero = () => {
  return 0;
};
console.log(Zero());
function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter((e) => {
    console.log(e, typeof e);
    if (typeof e === "number") {
      return e;
    }
  });
}

console.log(filter_list([1, 2, "a", "b"]));
console.log(filter_list([1, "a", "b", 0, 15]));
console.log(filter_list([1, 2, "aasf", "1", "123", 123]));
