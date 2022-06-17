let text = ["김밥", "대전", "나라", "미국", "라면"];

// if(a > b) return 1;
// return value > 0 이므로 a는 b 뒤에 옵니다.
//
// if(a < b) return -1;
// return value < 0 이므로 a는 b 앞에 옵니다.
//
// return 0;
// a와 b의 정렬을 유지합니다.

text.sort(function compare(a, b) {
  console.log(`a: ${a}`);
  console.log(`b: ${b}`);
  console.log("-------------------------------");
  if (a > b) return 1;
  if (a < b) return -1;
  if (a === b) return 0;
  else return -1;
});

console.log(text);
