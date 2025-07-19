export const used = [];
export function AddAvatar() {
  for (let i = 1; i < 10; i++) {
    let authorAvatar = "img/avatars/user{{xx}}.png";
    let randomAvatar = Math.floor(Math.random() * (11 - 1) + 1);
    if (!used.includes(randomAvatar)) {
      used.push(randomAvatar);
      if (randomAvatar < 10) {
        randomAvatar = "0" + randomAvatar;
      }
      let finalAvatar = authorAvatar.replace("{{xx}}", randomAvatar);
      return finalAvatar;
    }
  }
  return "Не удалось найти уникальный аватар";
}
export function offerPrice() {
  return Math.floor(Math.random() * (30000 - 2000) + 2000);
}
export function offerType() {
  const type = ["palace", "flat", "house", "bungalow", "hotel"];
  const randomIndex = Math.floor(Math.random() * type.length);
  return type[randomIndex];
}
export function PositiveInteger() {
  return Math.floor(Math.random() * (8 - 1) + 1);
}
export function checkInAndcheckOutTime() {
  const time = ["12:00", "13:00", "14:00"];
  const randomIndex = Math.floor(Math.random() * time.length);
  return time[randomIndex];
}

export function features() {
  const features = [
    "wifi",
    "dishwasher",
    "parking",
    "washer",
    "elevator",
    "conditioner",
  ];
  const randomIndex = Math.floor(Math.random() * features.length);
  return features[randomIndex];
}

export function photos() {
  const photos = [
    "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg",
    "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg",
    "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg",
  ];
  const randomIndex = Math.floor(Math.random() * photos.length);
  return photos[randomIndex];
}

export function lat() {
  const lat = (Math.random() * (35.7 - 35.65) + 35.65).toFixed(5);
  return +lat;
}

export function lng() {
  const lng = (Math.random() * (139.8 - 139.7) + 139.7).toFixed(5);
  return +lng;
}
