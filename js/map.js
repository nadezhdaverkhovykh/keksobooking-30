import {enableForm}from './form.js';
import getData from './data.js';
const form = document.querySelector('.ad-form');
const addressInput = form.address;
export const map = L.map('map-canvas').on('load', enableForm).setView({
  lat:35.68950,
  lng: 139.69171
}, 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const tokyoMarker = L.marker({
  lat: 35.68950,
  lng: 139.69171
},
{
  draggable: true,
  icon :mainPinIcon
}

);
tokyoMarker.addTo(map);

const icon = L.icon({
  iconUrl:  './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});


const mapData = getData();

const createCustomPopup = (point) => {
  const balloonTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = balloonTemplate.cloneNode(true);

  popupElement.querySelector('.popup__avatar').setAttribute('src',`${point.author.avatar}`);
  popupElement.querySelector('.popup__title').textContent = `${point.offer.title}`;
  popupElement.querySelector('.popup__text--address').textContent = `${point.offer.address.lat},${point.offer.address.lng}`;
  popupElement.querySelector('.popup__text--price').textContent = `${point.offer.price} ₽/ночь`;
  const accomadation = {
    'bungalow': 'Бунгало',
    'flat': 'Квартира',
    'hotel': 'Отель',
    'house': 'Дом',
    'palace': 'Дворец',
  };
  popupElement.querySelector('.popup__type').textContent = accomadation[`${point.offer.type}`];
  popupElement.querySelector('.popup__text--capacity').textContent = `${point.offer.rooms} комнаты для ${point.offer.guests} гостей`;
  popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${point.offer.checkin}, выезд до ${point.offer.checkout}`;
  popupElement.querySelector('.popup__features').textContent = `${point.offer.features}`;
  if (!point.offer.description) {
    popupElement.querySelector('.popup__description').style.display = 'none';
  } else {
    popupElement.querySelector('.popup__description').textContent = ` ${point.offer.description}`;
  }

  popupElement.querySelector('.popup__photo').setAttribute('src', `${point.offer.photos}`);

  return popupElement;
};

const markerGroup = L.layerGroup().addTo(map);
const createMarker = (point) => {
  const lat = point.location.lat;
  const lng = point.location.lng;
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker.addTo(markerGroup).bindPopup(createCustomPopup(point));
};

mapData.forEach((point) => {
  createMarker(point);
});

tokyoMarker.on('moveend', (evt) => {
  const coors = evt.target.getLatLng();
  const lat = coors.lat;
  const lng = coors.lng;
  const fixedLat = lat.toFixed(5);
  const fixedLng = lng.toFixed(5);
  const address = `${fixedLat},${fixedLng }`;
  addressInput.value = address;
});


