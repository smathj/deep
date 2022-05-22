// 즉시 실행 함수
const Person = (function () {
  let _age = 0; // privatre

  // 생성자 함수
  function Person(name, age) {
    this.name = name; // public
    _age = age;
  }

  // 프로토타입 메서드
  Person.prototype.sayHi = function () {
    console.log(`Hi My name is ${this.name}. I am ${_age}`);
  };

  // 생성자 함수를 반환
  return Person;
})();

const me = new Person("Lee", 20);
me.sayHi();
console.log(me.name);
console.log(me._age); // undefined

const you = new Person("Kim", 30);
you.sayHi();
console.log(you.name);
console.log(you._age); // undefined
