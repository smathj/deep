const Person = (function () {
    function Person(name) {
        this.name = name;
    }

    // 1, 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
    Person.prototype = {
        sayHello() {
            console.log(`Hi! My name is ${this.name}`)
        }
    }

    return Person;
}());

const me = new Person('Kim');

console.log(Person.prototype) // constructor가 없다
console.log(Person.prototype.__proto__ === Object.prototype)

console.log('==========================================================')

console.log(me.constructor === Person)
console.log(me.constructor === Object)