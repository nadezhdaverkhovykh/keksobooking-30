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
console.log(form);
const pristine = new Pristine(form, {
  classTo: "ad-form__element", // родитель, куда будет добавлен класс ошибки
  errorClass: "ad-form__element--invalid", // класс ошибки (уже стилизован в CSS)
  errorTextParent: "ad-form__element", // куда вставить текст ошибки
  errorTextClass: "text-help",
});

function checkTitleHandler(value) {
  return value.length >= 30 && value.length <= 100;
}
pristine.addValidator(
  form.querySelector("#title"),
  checkTitleHandler,
  " от 30 до 100"
);

function setupFormValidation() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      console.log("Форма валидна!");
    } else {
      console.log("Форма содержит ошибки!");
    }
  });
}
export default setupFormValidation;
