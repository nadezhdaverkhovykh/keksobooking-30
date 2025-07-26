import getData from './data.js';
import {
  map,
  article,
  createAvatar,
  createTitle,
  createAddress,
  createPrice,
  createType,
  createRoomsAndGuests,
  getCheckinAndCheckoutTime,
  createFeatures,
  createDescription,
  createApartmentPhoto,
} from './card.js';
console.log(
  createAvatar(),
  createTitle(),
  createAddress(),
  createPrice(),
  createType(),
  createRoomsAndGuests(),
  getCheckinAndCheckoutTime(),
  createFeatures(),
  createDescription(),
  createApartmentPhoto()
);

import setupFormValidation from './form.js';

setupFormValidation();
