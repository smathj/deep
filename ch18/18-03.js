function square(number) {
 return number * number;
}

console.dir(square)

console.log(Object.getOwnPropertyDescriptors(square));

console.log(Object.getOwnPropertyDescriptor(square, '__proto__'));

console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));