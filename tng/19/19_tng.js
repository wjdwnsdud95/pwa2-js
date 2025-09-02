const CallButton = document.querySelector('.callbutton');
const Container = document.querySelector('.container');

CallButton.addEventListener('click', () => {
  const InputUrl = document.querySelector('.inputurl');
  const url = InputUrl.value;
  Container.textContent = "";

  axios.get(url)
  .then(response => {
    response.data.forEach((item) => {
      const newImg = document.createElement('img');
      newImg.setAttribute('src', item?.download_url);
      Container.appendChild(newImg);
    })
  })
});