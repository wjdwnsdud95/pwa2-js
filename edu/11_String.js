// String 객체
let str = '문자열입니다.';

// length: 문자열의 길이를 반환
console.log(str.length);

// charAt(idx): idx의 요소의 값을 반환
console.log(str.charAt(3));

// indexOf(searchStr, index): 해당 문자열에서 serachStr을 찾아 최초의 인덱스를 반환
// 찾지 못하면 -1 반환
// idx는 생략 가능, start 지점 지정
str = '문자열입니다. 문자열입니다.';
console.log(str.indexOf('열'));
console.log(str.indexOf('열', 3));
console.log(str.indexOf('입니다.'));
console.log(str.indexOf('숫자'));
console.log(str.includes('숫자'));  // 존재여부 체크할 때는 includes 이용 가독성 향상

// replace(pattern, replacement): pattern을 찾아서 첫번째 문자열을 replacement 치환한 문자열을 반환
str = '문자열입니다. 문자열입니다.';
console.log(str.replace('문자열', '111').repeat('문자열', '222'));
console.log(str.replace('문자열', '222'));

// replaceAll(): pattern을 찾아서 모든 문자열을 replacement 치환한 문자열을 반환
// 필요없는 문자를 지울 때 사용
str = '문자열입니다. 문자열입니다.';
console.log(str.replaceAll('문자열', ''));

// substring(startIdx, endIdx): startIdx부터 endIdx까지 자른 문자열을 반환
str = '문자열입니다. 문자열입니다.';
console.log(str.substring(3, 5));

// split(separator, limit): 문자열에서 separator 기준으로 각 문자열을 잘라 배열 요소로 담은 배열을 반환
// limit로 배열의 길이를 조절하며 생략 가능
str = '탕수육, 짜장면, 짬뽕, 크림새우';
let arr = str.split(',');

// trim(): 문자열의 시작과 끝에 있는 공백을 제거한 문자열을 반환
str = '     하  하';
console.log(str.trim());

// toUpperCase(), toLowerCase(): 영어 대/소문자로 변환해서 반환
str = 'AfvwdeSDa';
console.log(str.toUpperCase());
console.log(str.toLowerCase());