function Person(name, age) {
  this.name = name; // public
  let _age = age; // private
}

// 프로토 타입 메서드
Person.prototype.sayHi = function () {
  console.log(`Hi My name is ${this.name}. I am ${_age}`);
};
