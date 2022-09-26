/* 
설명 : 


*/


class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce((pv, cv) => { return pv > cv ? cv : pv })
  }
}



let sif = new SmallestIntegerFinder();
console.log(sif)

console.log(
  sif.findSmallestInt([78,56,232,12,8]),
  sif.findSmallestInt([78,56,232,12,18]),
  sif.findSmallestInt([78,56,232,412,-228]),
  sif.findSmallestInt([78,56,232,-412,228]),
  sif.findSmallestInt([1,56,232,12,8]),
)