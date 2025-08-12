const form = document.querySelector('.ad-form');
export async function getAdverts() {
  try {
    const response = await fetch('https://30.javascript.htmlacademy.pro/keksobooking/data');
    if (!response.ok) {
      throw new Error('Возникла проблема c загрузкой объявлений');
    }
    const advert = await response.json();
    return advert;
  } catch (error) {
    loadError(error);
  }

}

function loadError(error){
  const map = document.querySelector('#map-canvas');
  const message = document.createElement('p');
  message.textContent = error;
  message.classList.add('errorload');
  message.style.display = 'block';
  map.append(message);
}


export async function postAdvert() {
  try {
    const response = await fetch('https://30.javascript.htmlacademy.pro/keksobooking', {
      method: 'POST',
      body: new FormData(form)
    });
    if (!response.ok) {
      throw new Error('Не удалось загрузить объявление');
    }
    const data = await response.json();
    postSuccess();
    return data;
  } catch (error) {
    postError();
  }
}

function postError() {
  const body = document.body;
  const template = document.querySelector('#error');
  const errorMessage = template.content.cloneNode(true);
  body.append(errorMessage);
  const errorBlock = document.querySelector('.error');
  document.addEventListener('keydown', closeKeydownHandler);
  function closeKeydownHandler(event) {
    if (event.key === 'Escape') {
      errorBlock.remove();
    }
  }
  document.addEventListener('click', closeClickHandler);
  function closeClickHandler(event) {
    if (event.target) {
      errorBlock.remove();
    }
  }
}

function postSuccess() {
  const body = document.body;
  const template = document.querySelector('#success');
  const successMessage = template.content.cloneNode(true);
  body.append(successMessage);
  const successBlock = document.querySelector('.success');
  document.addEventListener('keydown', closeKeydownHandler);
  function closeKeydownHandler(event) {
    if (event.key === 'Escape') {
      successBlock.remove();
    }
  }
  document.addEventListener('click', closeClickHandler);
  function closeClickHandler(event) {
    if (event.target) {
      successBlock.remove();
    }
  }
}


