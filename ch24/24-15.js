const counter = (function () {
  let counter = 0;

  // 함수를 인수로 전달 받는 클로저 반환
  return function (predicate) {
    counter = predicate(counter);
    return counter;
  };
})();

// 보조 함수
function increase(n) {
  return ++n;
}

function decrease(n) {
  return --n;
}

// 보조함수를 전달하여 호출한다
console.log(counter(increase)); // 1
console.log(counter(increase)); // 2

console.log(counter(decrease)); // 1
console.log(counter(decrease)); // 0
