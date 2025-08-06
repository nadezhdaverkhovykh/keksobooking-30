

export async function getAdvert() {
  try {
    const response = await fetch('https://30.javascript.htmlacademy.pro/keksobooking/data2');
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
