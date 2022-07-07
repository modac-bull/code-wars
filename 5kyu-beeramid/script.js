
/* 
Let's pretend your company just hired your friend from college and paid you a referral bonus. 
Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, 
and build, the largest three-dimensional beer can pyramid you can. 
And then probably drink those beers, because let's pretend it's Friday too.

A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...

Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:

your referral bonus, and

the price of a beer can

For example:

beeramid(1500, 2); // should === 12
beeramid(5000, 3); // should === 16



요약
->

input
보너스 수당 % 맥주 가각 (병당) -> 총 살수 있는 병 갯수

output 
만들 수 있는 피라미드 갯수
1^2 + 2^2 + 3^3 + ... + 9^2 + n^2 = 피라미드(n층)을 만들 수 있는 총 병 갯수 

피라미드(n층)을 만들 수 있는 총 병 갯수 < 총 구매 가능한 병의 갯수 < 피라미드(n+1층)을 만들 수 있는 총 병 갯수

-> 결과는 n

*/
// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
  
}