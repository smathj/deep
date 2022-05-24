// 자주 발생하는 실수
// 이렇게하면 올바르게 출력됨
const funcs = [];

for (let i = 0; i < 3; i++) {
  funcs[i] = function () {
    return i;
  };
}

for (let i = 0; i < funcs.length; i++) {
  console.log(funcs[i]());
}
