// 아래 프로그램을 만들어 주세요.
// '사과 게임' 위에 '장기' 삽입
// '어메이징브릭'에 베이지 배경색 추가
// 리스트의 요소들의 글자색을 짝수는 빨강, 홀수는 파랑으로 수정

// 타겟노드 = querySelector('#apple');
// 새노드 = createElement(li); , textContent = '장기';
// 부모노드 = querySelector('#ul');
// 새로운 요소 삽입 > 부모노드.insertBefor(새노드, 타겟노드)

// 장기 삽입
const newUl = document.querySelector('#ul');
const newGame = document.createElement('li');
newGame.textContent = '장기';

const TarGet = document.querySelector('#apple');
newUl.insertBefore(newGame, TarGet);

// 어메이징브릭 베이지 색상 추가
// 자식 요소에게 접근 시 고급 선택자 nth-child(last-child: 마지막 자식 요소에게 접근) 활용
const AmazingColor = document.querySelector('#ul li:last-child');
AmazingColor.style.backgroundColor = '#f5f5dc';

// 글자색 수정(짝수: 빨강), (홀수: 파랑)
function changeLiColor() {
  const listLi = document.querySelectorAll('#ul li');
  listLi.forEach((node, idx) => {
    if(idx % 2 === 0) {
      node.style.color = 'blue';
    }
    else {
      node.style.color = 'red';
    }
  });
}
changeLiColor();

const result = {
  title: '타이틀',
  content: '내용내용',
  img: 'https://www.admin.com/img/posts/laksfjakls.png'
};

function addCard(item) {
  // 카드 구조 만들기
  const newCard = document.createElement('div');
  newCard.classList.add('card');

  const newCardImg = document.createElement('div');
  newCardImg.classList.add('card-img');

  const newCardTitle = document.createElement('p');
  newCardTitle.textContent = add('card-title');

  const newCardContent = document.createElement('p');
  newCardContent.textContent = item.content;

  newCard.appendChild(newCardImg);
  newCard.appendChild(newCardTitle);
  newCard.appendChild(newCardContent);

  document.body.appendChild(newCard);
}