const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const fileChooserAvatar = document.querySelector('.ad-form-header__input');
const fileChooserAccommodation = document.querySelector('.ad-form__input');
const avatarPreview = document.querySelector('.avatar-preview');
const accommodationPreview = document.querySelector('.accommodation-preview');

fileChooserAvatar.addEventListener('change', showPreviewAvatar);
fileChooserAccommodation.addEventListener('change', showPreviewAccommodation);

export function showPreviewAvatar() {
  const file = fileChooserAvatar.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    avatarPreview.src = URL.createObjectURL(file);
  }
}

export function showPreviewAccommodation() {
  const file = fileChooserAccommodation.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    accommodationPreview.src = URL.createObjectURL(file);
  }

}


