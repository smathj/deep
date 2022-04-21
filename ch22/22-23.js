const person = {
  name: "Kim",
  foo(callback) {
    setTimeout(callback, 100);
  },
};

person.foo(function () {
  console.log(`Hi! my name is ${this.name}`);
  // callback(일반 함수로 호출된 콜백함수 내부의 this는 window)
});
