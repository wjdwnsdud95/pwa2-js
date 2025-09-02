/**
 * 플래그에 따라 로딩을 온(true일 경우 on)/오프(false일 경우 off)
 * @param {boolean} fig
 */
function loadingToggle(fig) {
  const loading = document.querySelector('.loding');
  if(fig) {
    loading.classList.add('loding-on');
  }
  else {
    loading.classList.remove('loding-on');
  }
}

document.querySelector('.request-box > button').addEventListener('click', () => {
  loadingToggle(true);
  const url = document.querySelector('#apiUrl').value;
  const cardBox = document.querySelector('.card-box');
  cardBox.textContent = '';

  axios.get(url)
  .then(res => {
    res.data.forEach(item => {
      const newCard = document.createElement('div');
      newCard.classList.add('card');
      newCard.style.backgroundImage = `url(${item.download_url})`;

      cardBox.appendChild(newCard);
    });
  })
  .catch(err => {
    console.error(err);
  })
  .finally(() => {
    loadingToggle(false);
  });
});