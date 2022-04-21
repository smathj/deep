function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

const me = new Person("Lee");

console.log(me.getName());

Person.prototype.name = "Kim";

console.log(Person.prototype.getName());
/**
 * Person.prototype 가 메서드를 호출한 객체이다
 */
