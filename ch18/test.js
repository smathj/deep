function Test() {
    this.name = '하북';

}

console.dir(Test)

const obj = new Test();
console.dir(obj);

console.dir(Test.prototype)