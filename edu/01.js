// 변수: 변하는 데이터를 저장하기 위한 공간
// 제육이라는 데이터를 var1에 넣겠다.(대입 연산자)
var var1 = '제육';
let let1 = '햄버거';
var var2;
var2 = 0;

// 상수: 최초에 대입한 값이 절대 변하지 않는 공간
const const1 = '뚝불';
// const1 = 'asd';

// var를 지양해야 하는 이유
// 1-1. var을 중복 선언이 가능하다.
// 1-2. lat을 중복 선언 시 오류가 난다.
var name = '홍길동';
var name = '갑돌이';

// let name2 = '둘리';
// let name2 = '도우너';
// 2. 작성한 코드상 선언보다 사용을 먼저할 경우 오류가 발생하지 않고 접근 가능한 현상
// console.log(age);
// var age = 20;
// let age = 20; -> 오류

// 3. var는 기본적으로 함수 레벨 스코프
// 스코프의 종류: 전역 스코프, 지역 스코프, 블록레벨 스코프
// 전역 레벨 스코프
// var globalVar = 'globalVar';
// let globalLet = 'globalLet';
// const globalConst = 'globalConst';

// // 지역 레벨 스코프
// function test() {
//   var localVar = 'localVar';
//   let localLet = 'localLet';
//   const localConst = 'localConst';
//   console.log(globalVar);
//   console.log(globalLet);
//   console.log(globalConst);

//   console.log(localVar);
//   console.log(localLet);
//   console.log(localConst);
// }

// test();

// // console.log(globalVar);
// // console.log(globalLet);
// // console.log(globalConst);

// // console.log(localVar);
// // console.log(localLet);
// // console.log(localConst);

// var: 함수 레벨 스코프
// let & const: 블럭 레벨 스코프
if(true) {
  var blockVar = 'blockVar';
  let blockLet = 'blockLet';
  const blockConst = 'blockConst';
}

console.log(blockVar);
console.log(blockLet);
console.log(blockConst);