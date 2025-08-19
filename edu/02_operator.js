// 산술 연산자
let num1 = 5;
let num2 = 10;

console.log(num1 + num2);  // 더하기
console.log(num1 - num2);  // 빼기
console.log(num1 * num2);  // 곱하기
console.log(num1 / num2);  // 나누기
console.log(num1 % num2);  // 나머지(나눈 뒤 나머지 값)

// 문자열 연결 연산자
// 문자열을 연결 할 때 concat 함수를 사용(명확성을 주기 위해 사용)
let firstName = '길동';
let lastName = '홍';
console.log(lastName + firstName);
console.log(lastName.concat(firstName));

// 산술 대입 연산자
let num3 = 0;
// num3 = num3 + num1;
num3 += num1;
console.log(num3);
num3 -= num1;
console.log(num3);
num3 *= num1;
console.log(num3);
num3 /= num1;
console.log(num3);
num3 %= num1;
console.log(num3);

// (전위/후위)증감 연산자
let num4 = 0;
num4++;
console.log(num4);

// 비교 연산자
let num5 = 1;
let num6 = 2;
console.log(num5 > num6);
console.log(num5 < num6);
console.log(num5 >= num6);
console.log(num5 <= num6);
// ==(데이터 타입 체크 x), ===(데이터 타입 체크 o)
// 불완전 비교
console.log(1 == '1');
console.log(1 != '1');
// 완전 비교(데이터까지 확실히 비교하기 위해 아래에 연산자를 사용)
console.log(1 === '1');
console.log(1 !== '1');

// 논리 연산자
console.log((1 === 1) && (1 === 0));
console.log((1 === 1) || (1 === 0));
console.log(!(1 === 1));

// 삼항 연산자
let rank = 3;
// 조건식 ? 참일 경우 처리 : 거짓일 경우 처리
let result = rank <= 2 ? '통과' : '거부';
console.log(result);