import { enableForm, setupFormValidation,formReset } from './form.js';
import { resetSlider, initSlider } from './priceSlider.js';
import {initMap, resetMapMarker,renderFilteredPin } from './map.js';
import { getAdverts,postAdvert} from './api.js';
import { addfilterListener } from './mapFilters.js';
import { debounce } from './util.js';
import { showPreviewAvatar} from './avatar.js';
import { showPreviewAccommodation } from './avatar.js';
const RERENDER_DELAY = 500;

export async function init() {
  const adverts = await getAdverts();
  initSlider();
  setupFormValidation(onSuccess);
  initMap(enableForm);
  renderFilteredPin(adverts);
  addfilterListener(adverts, debounce(renderFilteredPin, RERENDER_DELAY));
  showPreviewAvatar();
  showPreviewAccommodation();
}

const resetButton = document.querySelector('.ad-form__reset');
resetButton.addEventListener('click', reset);
function reset() {
  resetSlider();
  resetMapMarker();
  formReset();
}

function onSuccess() {
  return postAdvert().then(reset
  );
}


