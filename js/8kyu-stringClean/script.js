/* 
설명 : 


*/


function stringClean(s){
  const regNum = /[0-9]/g
  // Function will return the cleaned string
  return s.replace(regNum, "")
}




console.log(
  stringClean("123456789"),
  stringClean("(E3at m2e2!!)"),
  stringClean("My \"me3ssy\" d8ata issues2! Will1 th4ey ever, e3ver be3 so0lved?")
)