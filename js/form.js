const form = document.querySelector(".ad-form");
const formHeader = document.querySelector(".ad-form-header");
const formElements = document.querySelectorAll(".ad-form__element");
const mapFiltersForm = document.querySelector(".map__filters");
const mapFilterElements = document.querySelectorAll(".map__filter");
const mapFeatures = document.querySelector(".map__features");
const priceSlider = document.querySelector(".ad-form__slider");

export function disableForm() {
  form.classList.toggle("ad-form--disabled", "");
  formHeader.setAttribute("disabled", "");
  formElements.forEach((el) => el.setAttribute("disabled", ""));
  priceSlider.setAttribute("disabled", "");
  mapFiltersForm.classList.toggle("ad-form--disabled", "");
  mapFilterElements.forEach((el) => el.setAttribute("disabled", ""));
  mapFeatures.setAttribute("disabled", "");
}

disableForm();

// export function enableForm() {
//   form.classList.toggle("ad-form--disabled", "");
//   formHeader.removeAttribute("disabled", "");
//   priceSlider.removeAttribute("disabled", "");
//   formElements.forEach((el) => el.removeAttribute("disabled", ""));
// }
// enableForm();

// export function enableMapFilters() {
//   mapFiltersForm.classList.toggle("ad-form--disabled", "");
//   mapFilterElements.forEach((el) => el.removeAttribute("disabled", ""));
//   mapFeatures.removeAttribute("disabled", "");
// }
// enableMapFilters();
