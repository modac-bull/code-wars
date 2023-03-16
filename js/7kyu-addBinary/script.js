/* 
Implement a function that adds two numbers together and returns their sum in binary. 
The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

*/
function addBinary(a, b) {
  let sum = a + b;

  let arr = [];
  const makeBinary = (inputNumber) => {
    const divByTwo = (iNum) => {
      let last = false;
      if (iNum / 2 < 2) {
        arr.push(iNum % 2);
        last = true;
      }
      if (last) {
        arr.push(iNum % 2);
        return;
      }
      return divByTwo(iNum % 2);
    };
    divByTwo(inputNumber);
  };

  makeBinary(sum);

  return arr;
}
console.log(addBinary(4, 2));
