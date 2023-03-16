/*  
Anagram 조건
- 문자열을 문자 배열로 변환 했을 때
- 배열의 길이가 같아야 함
- 문자 배열을 이루는 원소의 종류와 갯수가 같아야 함

판단 기준
1. 배열의 길이가 같지 않으면 false
2. 배열의 길이가 같다.
3. 배열의 원소 종류가 다를 경우 false
4. 배열의 원소 종류가 같다면
5. 배열의 원소 종류가 같고 해당 원소의 갯수가 같다면 true


순서도
1. 해당 
*/



function anagrams(word, words) {
  // 1. 기준이 되는 문자열의 길이와, 원소 종류 갯수 판별
  let standardArr = word.split('');
  // console.log(specifyChar(word));

  // 문자열 규격화 함수 (길이, 기본원소 종류, 기본원소 종류 카운팅 갯수)
  function specifyChar (char) {
    // 1. 문자 배열의 기본 원소 추출
    let standArr = []; 
    char.split('').filter((v) => {
      if(standArr.includes(v)) {
        return
      } else {
        standArr.push(v);
      }
    });

    // 2. 기본 원소 갯수 ..
    //  기본 배열의 원소가 몇개 포함되어 있는지 찾기
    let standCountArr = [];
    standArr.sort().filter((v) => {
      let cnt = 0;
      char.split('').forEach(elem => {
        if( elem == v) {
          cnt++
        }
      });
      standCountArr.push(cnt)
    })

    // return [char.split('').length, standArr.sort(), standCountArr];
    return {
      length :  char.split('').length, 
      elems : standArr.sort(), 
      elemsCount : standCountArr
    }
  }

  // console.log(specifyChar('abab') , specifyChar('baba'))

  let resultArr = [];
  words.filter((v) => {
    if(specifyChar(word).length === specifyChar(v).length) {
      // console.log('길이가 같음');
      // console.log(specifyChar(word).elems , specifyChar(v).elems)
      if((specifyChar(word).elems.toString() === specifyChar(v).elems.toString()) && (specifyChar(word).elemsCount.toString() === specifyChar(v).elemsCount.toString()) ) {
        // console.log('원소 종류와 갯수가 같음')
        resultArr.push(v);
      }
    } else { // 길이가 다름 => 빈 배열 반환
      return []
    }
  })


  return resultArr
}





// exepected => ['aabb', 'bbaa']
console.log(

  anagrams('baba', ['aabb', 'abcd', 'bbaa', 'dada'])
)

