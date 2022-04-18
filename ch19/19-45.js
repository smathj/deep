function Person(name) {
    this.name = name;
};

const me = new Person('natae');

const parent = {
    constructor: Person,
    sayHello() {
        console.log(`Hi! My name is ${this.name}`)
    }
}

// 생성자 함수의 prototype 프로퍼티와
// 프로토타입 간의 연결 설정
Person.prototype = parent;

Object.setPrototypeOf(me, parent);

me.sayHello();
console.dir(Person)
console.log('me.constructor === Person : ', me.constructor === Person)
console.log('me.constructor === Object : ', me.constructor === Object)

console.log('Person.prototype === Object.getPrototypeOf(me) : ', Person.prototype === Object.getPrototypeOf(me))
// 인스턴스의 프로토타입과 생성자함수의 프로토타입 프로퍼티가 같아짐