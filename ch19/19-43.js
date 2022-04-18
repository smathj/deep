function Person(name) {
    this.name = name;
}

const me = new Person('natae');

const parent = {
    sayHello() {
        console.log(`Hi! My name is ${this.name}`)
    }
}

Object.setPrototypeOf(me, parent);

me.sayHello();

console.log(Object.getPrototypeOf(me) === parent)
console.log(me.__proto__.constructor === Person)
console.log(Object.getPrototypeOf(me) === Person.prototype)
console.log(Object.getPrototypeOf(me).constructor === Object.prototype.constructor)
