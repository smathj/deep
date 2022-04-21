/**
 * bind 는 , 바인딩만 할분 따로 호출해줘야 한다
 *
 */

function getThisBinding() {
  console.log(arguments);
  return this;
}

const thisArg = { a: 1 };

console.log(getThisBinding.bind(thisArg)); // getThisBinding
console.log(getThisBinding.bind(thisArg)()); //  { a: 1 }
