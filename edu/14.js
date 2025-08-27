// 이벤트
function test() {
  alert('테스트');
}

// Property Listener(프로퍼티 리스너)
// 요즘은 잘 안씀
// 동일한 이벤트를 여러번 사용 불가
const btn2 = document.querySelector('#btn2');
btn2.onclick = () => {
  alert('버튼2222');
}

// ***** addEventListener *****
// 여러개의 중복되는 이벤트를 추가하기 좋음
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert('버튼333');
});
btn3.addEventListener('click', btn3Alert);

// // removeEventLitener(): 이벤트 제거
// // 익명 함수로 주면 안됨(같은 익명함수끼리 주소값이 다름)
// btn3.removeEventListener('click', btn3Alert);

function btn3Alert(event) {
  console.log(event);
  alert('33333');
}

// scroll을 주고 싶을 때 window에 넣기
window.addEventListener('scroll', () => {
  console.log('scroll test');
});

// --------------------------------
const inputEmail = document.querySelector('#email');
inputEmail.addEventListener('keyup', (e) => {
  console.log(e.target.value);
});


// ---------------비밀번호 보이고 안보이고
// 체크박스 접근
const chkPw = document.querySelector('#seePw');

// 체크박스에 체인지 이벤트 추가
chkPw.addEventListener('change', (e) => {
  // 인풋 패스워드 접근
  const pw = document.querySelector('#pw');
  
  // 체크 여부 확인 분기
  if(e.target.checked) {
    // 인풋 패스워드 type속성 text로 변경
    pw.setAttribute('type', 'text');
  }
  else {
    // 인풋 패스워드 type속성 password로 변경
    pw.setAttribute('type', 'password');
  }
});