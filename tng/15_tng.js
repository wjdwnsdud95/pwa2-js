// 현지 시각 구하기
// 버튼을 누르면 시간이 멈추는 기능
// 버튼을 누르면 멈췄던 시간이 다시 흐르는 기능

// *********** js document 중요 ***********
/**
 * selector로 선택한 요소의 textContent에 현재시간 삽입
 */
function Clock(selector) {
  // Date 속성으로 현재 시간 불러오기
  const now = new Date();
  // 시
  let nowHours = String(now.getHours());
  // 분
  let nowMinutes = String(now.getMinutes());
  // 초
  let nowSeconds = String(now.getSeconds());
  // 오전, 오후 string 값을 보관할 변수
  let ampm = '';

  // 몇 시냐에 따라 오전, 오후 구분
  if(nowHours < 12) {
    ampm = '오전';
  }

  else {
    ampm = '오후';
    nowHours -= 12;
  }
  const newP = document.querySelector('.currenttime');

  // toString(), padStart() 사용하여 숫자가 한 자리 수 일때 0 앞에 넣기
  return newP.textContent = `현재 시각 ${ampm} ${nowHours.toString().padStart(2, '0')}:${nowMinutes.toString().padStart(2, '0')}:${nowSeconds.toString().padStart(2, '0')}`;
}

// 1초마다 시간이 움직이게 하기
let intervalCurrentTime = setInterval(() => {
  Clock();
}, 1000);

// ------------------------------------------------

// 멈춰 버튼 처리
const btnStop = document.querySelector('.btnStop');
btnStop.addEventListener('click', () => {
  clearInterval(intervalCurrentTime);
  intervalCurrentTime = null;
});

// 재시작 버튼 처리
const btnRestart = document.querySelector('.btnRestart');
btnRestart.addEventListener('click', () => {
  Clock();

  if(intervalCurrentTime === null) {
    intervalCurrentTime = setInterval(() => {
      Clock();
    }, 1000);
  }
});

// 기록 버튼
const btnReport = document.querySelector('.btnReport');
btnReport.addEventListener('click', () => {
  const container = document.querySelector('.reportConteiner');
  const newp2 = document.createElement('p');
  newp2.textContent = Clock();
  container.appendChild(newp2);
});

// 기록 초기화
const btnReportReset = document.querySelector('.btnReportReset');
btnReportReset.addEventListener('click', () => {
  document.querySelector('.reportConteiner').textContent = '';
});