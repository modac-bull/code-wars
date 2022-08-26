/* 
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]


*/


function arrayDiff(a, b) {
  if(b.length === 0) {
    return a
  }
  b.forEach((v) => {
    // console.log(v, '----')
    a = a.filter((v2) => {
      if(v2 === v) {
        console.log(v, v2)
        console.log("값 일치")
      } else {
        console.log(v, v2)
        console.log("값 불 일치", v2)
        // let changeNumber = Number(v2);
        return 
      }
    })
  })
  return a
}




console.log(
  // arrayDiff([1,2,4,5,6,1,2,3,5], [1,2]),
  arrayDiff([1,2,0], [1]),
  // arrayDiff([1,2,3], [1,2])
)