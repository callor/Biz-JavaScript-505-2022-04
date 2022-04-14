/*
JS 는 함수에서 multi data 를 return 할 수 있다
여러개의 값을 return 할수 있다
*/
const student = () => {
  return ["홍길동", "서울시", 33];
};

// 함수가 여러개의 값을 return 하면
// 다음과 같이 각각 변수에 값을 받아서 저장 할수 있다
[이름, 주소, 나이] = student();
console.log("이름:", 이름, "주소:", 주소, "나이:", 나이);

const nations = ["대한민국", "Republic of Korea"];

// 배열의 요소의 값을 각각 개별변수에 복사하기
let 한글 = nations[0];
let 영문 = nations[1];

// 배열의 요소에 저장된 데이터를 개별적인 변수로 복사하기
[한글, 영문] = nations;
console.log("한글 : ", 한글, "\t영문 : ", 영문);

/*
JSON( Javascript Object Notation )
JS 에서 사용하는 특별한 데이터 type
데이터 요소를 {key : value} 조합으로 작성한다

*/
const dogs = { 이름: "몽", 나이: 11, 성별: "남" };
console.log(dogs);
console.log(dogs.이름);

console.log(dogs["이름"]);
