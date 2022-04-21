/**
 * apply 와 call
 * 배열,    파라미터 ...
 */

function getThisBinding() {
  return this;
}

const thisArg = { a: 1 };

console.log(getThisBinding());

console.log(getThisBinding.apply(thisArg));
console.log(getThisBinding.call(thisArg));
