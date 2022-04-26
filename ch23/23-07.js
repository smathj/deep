let foo = 1;

{
  /**
   * let이나 const도 var와 마찬가지로
   * 호이스팅이 발생하지만 일시적 사각지대에 빠지게되어
   * 초기화를 한뒤 사용해야한다
   */
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  let foo = 2;
}
