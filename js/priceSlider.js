import { checkAccomodationHandler } from './form.js';
const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('#price');
const accommodationInput = document.querySelector('#type');
export const slider = noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: checkAccomodationHandler(),
  step: 1,
  connect: 'lower',
});
sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});

valueElement.addEventListener('input', () => {
  const price = valueElement.value;
  slider.set(price);
});
accommodationInput.addEventListener('change', () => {
  const newPlaceholder = checkAccomodationHandler();
  slider.set(newPlaceholder);
});
