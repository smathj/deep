// 함수 객체는 prototype 프로퍼티를 소유함
console.log((function() {}).hasOwnProperty('prototype'));
console.dir(function() {});
// 일반 객체는 소유안함
console.log(({}).hasOwnProperty('prototype'));