// 카운트 상태 함수
const increase = function () {
  let num = 0;
  return ++num;
};

console.log(increase()); // 1
console.log(increase()); // 1
console.log(increase()); // 1
