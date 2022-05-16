const increase = (function () {
  let num = 0;
  return function () {
    return ++num;
  };
})();
// 클로저
/**
 * 클로저는 자신이 정의된 위치에 의해 결정되는 상위 스코프인
 * 즉시 실행 함수의 렉시컬 환경을 기억하기 때문에
 * 즉시 실행 함수의 멤버인 num에 접근할 수 있다
 */
console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3
