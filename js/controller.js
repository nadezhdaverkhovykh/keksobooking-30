import { enableForm, setupFormValidation } from './form.js';
import { resetSlider, initSlider } from './priceSlider.js';
import {initMap, resetMapMarker} from './map.js';
import { getAdverts,postAdvert} from './api.js';
import {formReset} from './form.js';
export async function init() {
  const adverts = await getAdverts();
  initSlider();
  setupFormValidation(onSuccess);
  initMap(enableForm,adverts);
}


const resetButton = document.querySelector('.ad-form__reset');
resetButton.addEventListener('click', reset);
function reset() {
  resetSlider();
  resetMapMarker();
  formReset();
}

function onSuccess() {
  return postAdvert().then(()=>
    reset()
  );

}
