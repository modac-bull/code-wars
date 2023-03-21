/* 
설명

Story
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false


*/

export function checkCoupon(
  enteredCode: string,
  correctCode: string,
  currentDate: string,
  expirationDate: string
): boolean {
  let isValidCorrect: boolean = false;
  let isValidExpired: boolean = true;
  if (enteredCode === correctCode) {
    isValidCorrect = true;
  } else {
    isValidCorrect = false;
  }
  const CURRENT_DATE = new Date(currentDate).getTime();
  const EXPIRATION_DATE = new Date(expirationDate).getTime();
  if (EXPIRATION_DATE - CURRENT_DATE >= 0) {
    isValidExpired = true;
  } else {
    isValidExpired = false;
  }
  return isValidCorrect && isValidExpired;
}

console.log(
  checkCoupon("123", "123", "September 5, 2014", "September 5, 2014")
);



/* 
export function checkCoupon(enteredCode: string, correctCode: string, currentDate: string, expirationDate: string): boolean {
  return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate);
}


export function checkCoupon(enteredCode: string, correctCode: string, currentDate: string, expirationDate: string): boolean {
  let cDate = new Date(currentDate);
  let expDate = new Date(expirationDate);
  return ((enteredCode === correctCode) && (cDate <= expDate)) ? true : false
}

*/