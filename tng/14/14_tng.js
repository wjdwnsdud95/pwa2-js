// 1. 글을 입력하는 란이 있음
// 2. 작성 버튼을 누르면 아래와 같이 동작
// 2-1. 글 입력란이 비워져 있다면 아무 동작 안함
// 2-2. 글 입력란이 작성되어 있다면 해당 글을 기반으로 목록 추가
// 2-2-2. 작성 완료 시 글 입력란을 비우기
// -----------------------------------------------------------
const Btn = document.querySelector('#btn');
const inputText = document.querySelector('#inputText');

Btn.addEventListener('click', () => {
  // preventDefault(): 이벤트의 기본 동작(예: 폼 제출, 링크 클릭 등)을 막는 메서드
  // e.preventDefault();
  let TextValue = inputText.value;

  if(TextValue) {
    const outputText = document.createElement('p');
    outputText.classList = 'content';
    outputText.textContent = TextValue;
    const container = document.querySelector('.container');
    container.appendChild(outputText);
  }

  inputText.value = '';

});

// 서비스
// 1. 엔터로 작성 되게 하기
// -----------------------------------------------------------
inputText.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    e.preventDefault(); // 기존 keypress 이벤트 중지
    const Btn = document.querySelector('#btn');
    Btn.click(); // 작성 버튼 클릭 이벤트 발생시키기
  }
});

// 2. 아이템 클릭하면 완료, 다시 클릭하면 풀리기
// -----------------------------------------------------------
  // const outputText = document.createElement('p');
  // outputText.classList = 'content';

  // outputText.addEventListener('click', (e) => {
  //   e.target.classList.toggle('toggle-line-through');
  // })
