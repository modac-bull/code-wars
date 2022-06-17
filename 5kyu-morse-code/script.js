decodeMorse = function (morseCode) {
  //your code here
  // 1. 모스코드 테이블 설정 (A~Z ! . 정도).. => MORSE_CODE(code) return character 제공해주는 내장 함수 이용해보기
  const morseTable = {
    A : '.-',
    B : '-...',
    C : '-.-.',
    D : '-..',
    E : '.',
    F : '..-.',
    G : '--.',
    H : '....',
    I : '..',
    J : '.---',
    K : '-.-',
    L : '.-..',
    M : '--',
    N : '-.',
    O : '---',
    P : '.--.',
    Q : '--.-',
    R : '.-.',
    S : '...',
    T : '-',
    U : '..-',
    V : '...-',
    W : '.--',
    X : '-..-',
    Y : '-.--',
    Z : '--..',
    SOS: '...---...',
    ExMark: '-.-.--',
    COMMA: '.-.-.-',
    SPACE: 'space',
  }

  let inputArr = morseCode.trim().replace(/   /gi, " space " ).split(' ');
  let outputArr = [];

  inputArr.map((v)=> {
    for ( const char in morseTable ) {
      if (v == morseTable[char]) {
        // console.log(v, char);
        if( char === "ExMark") {
          outputArr.push("!"); 
        } else if (char === "COMMA") {
          outputArr.push("."); 
        } else if (char === "SPACE") {
          outputArr.push("space"); 

        } else {
  
          outputArr.push(char); 
        }   
      } 
    }
  })
  console.log(outputArr);
  // 띄어쓰기 연이어서 들어올 경우엔 스페이스 띄우기
  return outputArr.join('').replace(/ /gi, "").replace(/space/gi, " ");
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))
console.log(decodeMorse('   .  . ' ))
console.log(decodeMorse('...---... -.-.-- .-.-.-'))