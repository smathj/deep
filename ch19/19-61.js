const person = { name: 'natae'}

// ES6 Reflect.has()
console.log(Reflect.has(person, 'name'))
console.log(Reflect.has(person, 'toString'))    // true

// hasOwnProperty은 상속 취급 X
console.log(person.hasOwnProperty('name'))
console.log(person.hasOwnProperty('toString'))  // false


