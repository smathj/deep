/**
 * 클로저 시작
 */

const x = 1;
function outerFunc() {
  const x = 10;

  // innerFunc 함수의 외부 스코프는 outerFunc 함수이기에 "const x = 10" 접근이 가능하다
  // 물론 밖게있는 x도 가능하지만 제일먼저 검색되는게 outerFunc이다
  function innerFunc() {
    console.log(x); // 10
  }

  innerFunc();
}
outerFunc();
