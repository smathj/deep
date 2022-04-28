/**
 * 함수를 어디서 호출했느냐가 중요한게아니다.
 * 어디서 정의했느냐가 중요하다
 * 이를 렉시컬 스코프라 한다
 */

const x = 1;

function outerFunc() {
  const x = 10;
  innerFunc();
}

function innerFunc() {
  console.log(x); // 1
  console.log(this === global);
}

outerFunc();
