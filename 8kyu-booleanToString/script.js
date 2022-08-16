console.log("script!")
const flip = (d, a) => {
  //TODO
  if (d === 'R') {
    return a.sort();
  } else {
    return a.sort().reverse()
  }
}


console.log(
  flip("R", [13, 2, 4, 7, 93])
)


console.log(

  [13,2,4,7,93].sort()
)