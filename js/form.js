const form = document.querySelector(".ad-form");
const formHeader = document.querySelector(".ad-form-header");
const formElements = document.querySelectorAll(".ad-form__element");
const mapFiltersForm = document.querySelector(".map__filters");
const mapFilterElements = document.querySelectorAll(".map__filter");
const mapFeatures = document.querySelector(".map__features");
const priceSlider = document.querySelector(".ad-form__slider");

export function disableForm() {
  form.classList.toggle("ad-form--disabled", true);
  formHeader.setAttribute("disabled", true);
  formElements.forEach((el) => el.setAttribute("disabled", true));
  priceSlider.setAttribute("disabled", true);
  mapFiltersForm.classList.toggle("ad-form--disabled", true);
  mapFilterElements.forEach((el) => el.setAttribute("disabled", true));
  mapFeatures.setAttribute("disabled", true);
}

disableForm();

export function enableForm() {
  form.classList.toggle("ad-form--disabled", false);
  formHeader.removeAttribute("disabled", false);
  priceSlider.removeAttribute("disabled", false);
  formElements.forEach((el) => el.removeAttribute("disabled", false));
}
enableForm();

export function enableMapFilters() {
  mapFiltersForm.classList.toggle("ad-form--disabled", false);
  mapFilterElements.forEach((el) => el.removeAttribute("disabled", false));
  mapFeatures.removeAttribute("disabled", false);
}
enableMapFilters();
