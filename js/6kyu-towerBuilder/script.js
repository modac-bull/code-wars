/* 
설명 : 

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]


*/

function towerBuilder(nFloors) {
  // build here
  let floorArr = [];
  for (let i = 1; i <= nFloors; i++) {
    floorArr.push(2 * i - 1);
  }

  let floorChars = floorArr.map((f, idx) => {
    // console.log(f, idx + 1, floorArr[floorArr.length - 1]);
    let floorChar = [];
    for (
      let i = 1;
      i <= (floorArr[floorArr.length - 1] - (2 * idx + 1)) / 2;
      i++
    ) {
      floorChar.push(" ");
    }
    for (let i = 1; i <= 2 * idx + 1; i++) {
      floorChar.push("*");
    }
    for (
      let i = 1;
      i <= (floorArr[floorArr.length - 1] - (2 * idx + 1)) / 2;
      i++
    ) {
      floorChar.push(" ");
    }
    return floorChar.join("");
  });

  return floorChars;
}

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(4));

/* 
function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}


function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2)+ 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}

function towerBuilder(n) {
  return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
}

function towerBuilder(nFloors) {
  // build here
  let space,star, tower = [];
  for(i = 1; i <= nFloors; i++){
    space = " ".repeat(nFloors - i);
    star  = "*".repeat((2*i) - 1);
    tower.push(`${space}${star}${space}`);
  }
  return tower
}
*/
