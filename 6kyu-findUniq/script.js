/* 
설명 : 
There is an array with some numbers. All numbers are equal except for one. Try to find it!

      findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
      findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
      It’s guaranteed that array contains at least 3 numbers.
      
      The tests contain some very huge arrays, so think about performance.
      
      This is the first kata in series:
      
      Find the unique number (this kata)

*/
function findUniq(arr) {
  // do magic
  let setArr = new Set(arr);
  let result = null;
  setArr.forEach((v) => {
    let cnt1 = {
      cnt: 0,
      value: null,
    };
    let cnt2 = {
      cnt: 0,
      value: null,
    };
    arr.map((k) => {
      if (v === k) {
        cnt1.cnt++;
        cnt1.value = k;
      } else {
        cnt2.cnt++;
        cnt2.value = k;
      }
    });

    console.log(cnt1, cnt2);
    if (cnt1.cnt === 1) {
      result = cnt1.value;
    }
    if (cnt2.cnt === 1) {
      result = cnt2.value;
    }
  });
  return result;
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));

/* 

function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}


function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

function findUniq(arr) {
  let [a,b,c] = arr.slice(0,3);
  if( a != b && a!=c ) return a;
  for( let x of arr ) if( x!=a ) return x
}

function findUniq(arr) {
  return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );
}

function findUniq(arr) {
  arr = arr.sort()
  if (arr[0] === arr[1]){
    return arr[arr.length -1]
  } else {
    return arr[0]
  } 
}


*/
