const form = document.querySelector('.ad-form');
const priceInput = form.price;
const accommodationInput = form.type;
const checkin = form.querySelector('[name="timein"]');
const checkout = form.querySelector('[name="timeout"]');

const formHeader = document.querySelector('.ad-form-header');
const formElements = document.querySelectorAll('.ad-form__element');
const mapFiltersForm = document.querySelector('.map__filters');
const mapFilterElements = document.querySelectorAll('.map__filter');
const mapFeatures = document.querySelector('.map__features');
const priceSlider = document.querySelector('.ad-form__slider');

export function disableForm() {
  form.classList.toggle('ad-form--disabled', true);
  formHeader.setAttribute('disabled', true);
  formElements.forEach((el) => el.setAttribute('disabled', true));
  priceSlider.setAttribute('disabled', true);
  mapFiltersForm.classList.toggle('ad-form--disabled', true);
  mapFilterElements.forEach((el) => el.setAttribute('disabled', true));
  mapFeatures.setAttribute('disabled', true);
}

disableForm();

export function enableForm() {
  form.classList.toggle('ad-form--disabled', false);
  formHeader.removeAttribute('disabled', false);
  priceSlider.removeAttribute('disabled', false);
  formElements.forEach((el) => el.removeAttribute('disabled', false));
}
enableForm();

export function enableMapFilters() {
  mapFiltersForm.classList.toggle('ad-form--disabled', false);
  mapFilterElements.forEach((el) => el.removeAttribute('disabled', false));
  mapFeatures.removeAttribute('disabled', false);
}
enableMapFilters();

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'text-help',
});


function checkTitleHandler(value) {
  return value.length >= 30 && value.length <= 100;
}
pristine.addValidator(
  form.querySelector('#title'),
  checkTitleHandler,
  ' Заголовок должен быть от 30 знаков до 100'
);

pristine.addValidator(priceInput,checkPriceHandler,'Максимальное значение — 100 000 руб.');

function checkPriceHandler(value) {
  return value <= 100000;
}

const accommodation = {
  'bungalow': '0',
  'flat': '1000',
  'hotel': '3000',
  'house': '5000',
  'palace': '10000',
};

pristine.addValidator(accommodationInput, checkAccomodationHandler);
function checkAccomodationHandler() {
  const accommodationValue = accommodationInput.value;
  const accommodationType = accommodation[accommodationValue];
  priceInput.setAttribute('placeholder', `${accommodationType }`);
}
pristine.addValidator(priceInput, priceForNight, 'Цена должна быть не ниже указанной');
function priceForNight() {
  const priceInputValue = priceInput.value;
  const accommodationValue = accommodationInput.value;
  const checkAccommodation = accommodation[accommodationValue];
  const result = Number(priceInputValue) >= Number(checkAccommodation);
  return result;
}
const rooms = form.rooms;
const guests = form.capacity;
const maxAmount = {
  '1': ['1'],
  '2': ['1','2'],
  '3': ['1','2','3'],
  '100': ['0']
};
function checkinCapacityHandler() {
  const roomsAmount = rooms.value;
  const guestsAmount = guests.value;
  const checkAvailable = maxAmount[roomsAmount];
  return checkAvailable.includes(guestsAmount);
}

pristine.addValidator(rooms,checkinCapacityHandler,'Количество комнат не соответсвует количеству гостей');
pristine.addValidator(guests, checkinCapacityHandler, 'Количество гостей не соответсвует количеству комнат');

function checkinTimeHandler () {
  const checkinValue = checkin.value;
  const checkoutValue = checkout.value;
  return checkinValue === checkoutValue;
}
pristine.addValidator(checkin ,checkinTimeHandler,'Въезд невозможен');
pristine.addValidator(checkout ,checkinTimeHandler,'Выезд невозможен');


function setupFormValidation() {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    pristine.validate();
  }
  );
}
export default setupFormValidation;


