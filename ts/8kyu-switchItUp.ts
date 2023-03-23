/* 
설명
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.
*/

export function switchItUp(intNumber: number): string {
  switch (intNumber) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    default:
      return "not a number";
  }
}

/* 
export function switchItUp(intNumber:number):string {
   enum out{ Zero,One,Two,Three,Four,Five,Six,Seven,Eight,Nine,Ten};
   return out[intNumber];
}

export function switchItUp(intNumber:number):string {
  return ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'][intNumber];
}


export function switchItUp(intNumber:number):string {
  switch(intNumber){
    case 0:
      return 'Zero';
    case 1:
      return 'One';
    case 2:
      return 'Two';
    case 3:
      return 'Three';
    case 4:
      return 'Four';
    case 5:
      return 'Five';
    case 6:
      return 'Six';
    case 7:
      return 'Seven';
    case 8:
      return 'Eight';
    case 9:
      return 'Nine';
    default:
      return "";
  }
}


*/
