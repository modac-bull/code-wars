/* 
설명 : 
Enough is enough!
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, 
and now they want to show Charlie their entire collection. 
However, Charlie doesn't like these sessions, since the motif usually repeats. 
He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. 
Luckily, Alice and Bob are able to encode the motif as a number. 
Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.

For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], 
drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].


With list [20,37,20,21] and number 1, the result would be [20,37,21].


// 입력한 배열의 요소 arr와 횟수 n 
(요약) 입력한 배열의 요소가 n번까지만 중복되고 초과되는 요소는 제거하는 배열을 반환할 것.

생각한 알고리즘 순서
1. 배열 요소 map 하면서 해당 요소의 카운트 숫자를 저장 && 배열에 push
2. 해당 요소의 카운트 숫자가 n을 넘으면 push하지 않고 넘어감
  - 해당 숫자의 카운트를 어떻게 지역 변수로 관리할 지가 관건일 것 같음



*/

function deleteNth(arr, n) {
  // ...
}

console.log(deleteNth([20, 37, 20, 21], 1));
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));
