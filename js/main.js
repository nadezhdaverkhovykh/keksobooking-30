import DATA from "./data.js";
import {
  map,
  article,
  createAvatar,
  createTitle,
  createAddress,
  createPrice,
  createType,
  createRoomsAndGuests,
  checkinAndcheckoutTime,
  createFeatures,
  createDescription,
  createApartmentPhoto,
} from "./card.js";

console.log(DATA);
console.log(
  createAvatar(),
  createTitle(),
  createAddress(),
  createPrice(),
  createType(),
  createRoomsAndGuests(),
  checkinAndcheckoutTime(),
  createFeatures(),
  createDescription(),
  createApartmentPhoto()
);
