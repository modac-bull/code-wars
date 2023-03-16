/* 
Alex just got a new hula hoop, he loves it but feels discouraged 
because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop 
goes round and it will return him an encouraging message :)

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".

*/

export function hoopCount(n: number): string {
  //your code here
  if (n > 10) {
    return "Great, now move on to tricks";
  } else {
    return "Keep at it until you get it";
  }
}

/* 

export function hoopCount(n: number): string {
  return n >= 10 ? "Great, now move on to tricks": "Keep at it until you get it"
}

export function hoopCount (n: number): string {
  enum Reply {
    GREAT = 'Great, now move on to tricks',
    KEEP = 'Keep at it until you get it'
  }
  return n >= 10 ? Reply.GREAT : Reply.KEEP;
}

export function hoopCount(n: number): string {
  return n<10?"Keep at it until you get it":"Great, now move on to tricks"  
}

export const hoopCount = (n: number): string => n < 10 ? "Keep at it until you get it" : "Great, now move on to tricks"
*/
