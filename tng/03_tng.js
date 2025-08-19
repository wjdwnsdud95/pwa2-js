// IF로 만들어주세요.
// 성적
// 범위 :
//    100   : A+
//    90이상 100미만 : A
//    80이상 90미만 : B
//    70이상 80미만 : C
//    60이상 70미만 : D
//    60미만: F
//출력 문구 : "당신의 점수는 XXX점 입니다. <등급>"

// 점수
let score = 0;
// 성적
// let record = 0;
// 등급
let rating = 0;

if(score > 100 || score < 0) {
  console.log('잘못된 값입니다.');
}

else {
if(score === 100) {
  // record = score;
  rating = 'A+';
  // console.log('당신의 점수는 ' + record + '점 입니다.' + '<A+>');
}

else if(score >= 90) {
  // record = score;
  rating = 'A';
  // console.log('당신의 점수는 ' + record + '점 입니다.' + '<A>');
}

else if(score >= 80) {
  // record = score;
  rating = 'B';
  // console.log('당신의 점수는 ' + record + '점 입니다.' + '<B>');
}

else if(score >= 70) {
  // record = score;
  rating = 'C';
  // console.log('당신의 점수는 ' + record + '점 입니다.' + '<C>');
}

else if(score >= 60) {
  // record = score;
  rating = 'D';
  // console.log('당신의 점수는 ' + record + '점 입니다.' + '<D>');
}

else if(score < 60) {
  // record = score;
  rating = 'F';
  // console.log('당신의 점수는 ' + record + '점 입니다.' + '<F>');
}

console.log('당신의 점수는 ' + score + '점 입니다.' + '<' + rating + '>');
// 주로 아래와 같은 문법으로 변수의 값을 불러온다.(``-> 백틱 또는 물결 버튼 부분)
console.log(`당신의 점수는 ${score}점 입니다.<${rating}>`);
}