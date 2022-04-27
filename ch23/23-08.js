var x = 1;
const y = 2;

function foo() {
  var x = 3;
  const y = 4;

  function bar() {
    const z = 5;
    console.log(a + b + x + y + z);
  }
  bar(10);
}
foo(20); // <- 호출 직전

/**
 * 전역 실행 컨텍스트
 * 전역 렉시컬 환경 (컴포넌트( =. 변수 환경 컴포넌트))
 *      - 전역 환경 레코드
 *            - 객체 환경 레코드
 *            - 선언적 환경 레코드
 *            - [[GlobalThisValue]] this 바인딩
 *      - 외부 렉시컬 실행 참조
 */
// const a = undefined;
// const b = null;
// const c = "Hello";
//
// console.log(a ?? b ?? c);
