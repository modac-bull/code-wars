/*
Write a function named setAlarm which receives two parameters. 
The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation 
(because these are the circumstances under which you need to set an alarm). 
It should return false otherwise. 


Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true

employed = true, vacation = false 일 때에만 true를 반환

 */

export function setAlarm(employed: boolean, vacation: boolean): boolean {
  if (employed === true && vacation === false) {
    return true;
  } else {
    return false;
  }
}

/* 

export function setAlarm(employed: boolean, vacation: boolean) {
return employed && !vacation

}

export function setAlarm(employed: boolean, vacation: boolean): boolean {
  return employed && !vacation;
}
export function setAlarm(employed: boolean, vacation: boolean) {
   if(employed && !vacation) return true;
   else return false;
    
}


*/
