let nums = [1, 3, 4, 2, 8, 7, 5, 10, 9];

// if(a > b) return 1;
// return value > 0 이므로 a는 b 뒤에 옵니다.
//
// if(a < b) return -1;
// return value < 0 이므로 a는 b 앞에 옵니다.
//
// return 0;
// a와 b의 정렬을 유지합니다.

// 오름차순 정렬
nums.sort(function compare(a, b) {
  console.log(`a: ${a}`);
  console.log(`b: ${b}`);
  console.log("--------------------------");
  // 오름 차순
  // return a - b;
  // 내림 차순
  return b - a;

  // a 뒷숫자가 큰거
  // if (a > b) {
  //   return 1; // a가 클때 a는 뒤로
  // }
  // b 앞순자가 큰거
  // if (a < b) {
  //   return -1; // a가 작을때 a는 앞으로
  // }
});

/**
 * a - b > 0 : 뒷 숫자인 a가 앞으로
 * a - b < 0
 */

console.log(nums);
