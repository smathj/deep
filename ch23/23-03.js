/**
 * 코드말고
 * 실행 컨텍스트 관점으로 보아라
 *
 */

// 1. 전역 코드를 평가하여, 전역 실행 컨텍스트 생성하고  "const x" 를 추가한다
// 3. 전역 실행 컨텍스트의 x 에 1를 할당한다
const x = 1;

// 2. 전역 실행 컨텍스트에 "function foo"를 추가한다
function foo() {
  // 5. foo 함수 실행 컨텍스트가 생성된다.
  // 6. 이어서 변수 선언문 "const y", 함수 선언문 "function bar"를 평가하고,
  // foo 함수 실행 컨텍스트에 추가한다
  // 7. 함수 실행 컨텍스트에 y에 2를 할당한다
  const y = 2;

  function bar() {
    // 9. bar 함수 실행 컨텍스트가 생성된다
    // 10. 변수 선언문 "const z"를 평가하고 , 함수 실행 컨텍스트에 추가한다
    // 11. bar 함수 실행 컨텍스트의 z에 3를 할당한다
    const z = 3;
    // 12. console.log를 실행한다
    console.log(x + y + z);
    // 13. bar 함수가 종료된다
  }
  // 8. 함수 bar를 실행한다, foo 함수 코드 실행을 중단하고, 제어권이 bar 함수로 이동한다
  bar();
  // 14. foo 함수로 제어권이 다시오고, bar 실행 컨텍스트가 소멸된다
}

// 4. foo 함수를 실행한다, 전역코드는 실행을 중단하고, 제어권이 foo 함수로 이동한다
foo(); // 6
// 15. foo 함수가 종료되고, 제어권이 다시 전역 코드로 돌아간다, foo 실행 컨텍스트가 소멸된다
/* 이로서 실행 컨텍스트 스택에는 아무것도 존재하지 않는다 */
