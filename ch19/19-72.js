// 자신의 프로퍼티만 보고싶을때 사용하는 메서드

const person = {
    name: 'natae',
    address: 'Seoul',
    __proto__: { age: 20}
}

console.log(Object.keys(person));   // [ 'name', 'address' ]


// ES8에서 객체의 프로퍼티중 열거 가능한 프로퍼티의 값을 배열로 반환하는
// Object.values 메서드
console.log(Object.values(person)); // [ 'natae', 'Seoul' ]

// ES8에서 키와값의 쌍으로 [ [첫번째 프로퍼티 쌍],  [두번째 프로퍼티쌍] ...] 얻을 수 있는
//  Object.entries 메서드 ( 즉 Array<Map> 느낌 )
console.log(Object.entries(person)); // [ [ 'name', 'natae' ], [ 'address', 'Seoul' ] ]

