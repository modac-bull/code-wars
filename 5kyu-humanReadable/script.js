/* 
설명 : 
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

1H = 60M = 3600S
1M = 60S

=> seconds / 3600
*/

function humanReadable(seconds) {
  let HOUR = null;
  let MIN = null;
  let SEC = null;

  HOUR = Math.floor(seconds / 3600);
  MIN = Math.floor((seconds % 3600) / 60);
  SEC = seconds % 60;

  if (HOUR < 10) {
    HOUR = "0" + HOUR;
  }
  if (MIN < 10) {
    MIN = "0" + MIN;
  }
  if (SEC < 10) {
    SEC = "0" + SEC;
  }

  let ReadableWords = `${HOUR}:${MIN}:${SEC}`;
  return ReadableWords;
}
console.log(humanReadable(0));
console.log(humanReadable(59));
console.log(humanReadable(60));
console.log(humanReadable(90));
console.log(humanReadable(3600));
console.log(humanReadable(86399));
console.log(humanReadable(86400));
console.log(humanReadable(359999));

// =====================================================

/* 
function humanReadable(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}

function humanReadable(seconds) {
  return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(v) {
    v = Math.floor(v).toString();
    return v.length == 1 ? '0' + v : v;
  }).join(':');
}

p=n=>`0${n}`.slice(-2),humanReadable=(s)=>(m=s/60|0,p(m/60|0)+':'+p(m%60)+':'+p(s%60))


function humanReadable(seconds) {
  return [(seconds / 3600) | 0, seconds % 3600 / 60, seconds % 3600 % 60].map(n => ('0' + ( '' + n|0)).substr(-2)).join(':')
}

function humanReadable(seconds) {
var hours = parseInt( seconds / 3600 ) ;
var minutes = parseInt( seconds / 60 ) % 60;
var seconds = seconds % 60;

var pad = function(val){
  return val < 10 ?"0"+val:val;
}

return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
}

*/
