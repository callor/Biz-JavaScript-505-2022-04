function sum() {
  let num1 = 30;
  let num2 = 50;
  return num1 + num2;
}
const add = function () {
  return 100 + 200;
};
const multi = () => {
  return 200 * 2;
};

// sum() 함수를 호출하여 return 값을
// sumResult 변수에 저장
const sumResult = sum();
const addResult = add();
const multiResult = multi();
console.log(sumResult, addResult, multiResult);

const intKor = []; // Array()
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
console.log(3 in trees);
console.log(10 in trees);

for (let i = 0; i < trees.length; i++) {
  console.log(trees[i]);
}

const student = { 이름: "홍길동", 나이: 33, 전화: "010-11-1111" };
console.log("이름" in student);

/*
JS 에서는 선언만 된 변수와 null, "", 0, NaN, undefined 가
저장된 변수는 "논리적 false 로 인식"한다
*/
let title1;
const title2 = null;
const title3 = "";
const title4 = 0;
const title5 = NaN;
const title6 = undefined;

/*
논리적 false 인 변수와 OR(||) 연산자를 조합하면
상당히 편리한 코드 구현이 가능하다
논리적 false 변수가 있으면 건너뛰기를 실행하여
오른쪽의 값을 변수에 대입한다
*/
let bTitle =
  title1 || title2 || title3 || title4 || title5 || title6 || "우리나라";

// Java 스러운 코드
if (title2 != null) {
  bTitle = title2;
} else {
  bTitle = "대한민국";
}
// JS 스러운 코드로 바꾸면
bTitle = title2 || "대한민국";

console.log(bTitle);

/*
JS 문자열변수는 문자열 1개씩을 요소로 갖는 
배열처럼 사용가능하다

배열처럼 문자열변수[index] 와 같은 코드로 요소의 값을
읽을 수 있다.
단, 문자열변수[index] = "한" 과 같이 요소의 값을
변경할수는 없다
*/
const nation = "대한민국";
for (let i = 0; i < nation.length; i++) {
  console.log(nation[i]);
}
