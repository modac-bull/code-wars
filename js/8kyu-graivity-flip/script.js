const flip = (d, a) => {
  //TODO
  if (d === 'R') {
    return a.sort((a, b) => a - b );
  } else {
    return a.sort((a, b) => b - a)
  }
}


console.log(
  flip("R", [13, 2, 4, 7, 93]),
  flip("L", [13, 2, 4, 7, 93])
)


console.log(

  [13,2,4,7,93].sort()
)