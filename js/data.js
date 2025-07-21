import {
  used,
  addAvatar,
  getOfferPrice,
  getOfferType,
  getPositiveInteger,
  getCheckinAndCheckoutTime,
  getFeatures,
  getPhotos,
  getLat,
  getLng,
} from "./util.js";

const DATA = [
  {
    author: {
      avatar: addAvatar(),
    },
    offer: {
      title: "Уютная квартира в центре города!",
      address: {
        lat: getLat(),
        lng: getLng(),
      },
      price: getOfferPrice(),
      type: getOfferType(),
      rooms: getPositiveInteger(),
      guests: getPositiveInteger(),
      checkin: getCheckinAndCheckoutTime(),
      checkout: getCheckinAndCheckoutTime(),
      features: getFeatures(),
      description:
        "Прекрасная светлая квартира, оборудованная всем самым необходимым.",
      photos: getPhotos(),
    },
    location: {
      lat: getLat(),
      lng: getLng(),
    },
  },
  {
    author: {
      avatar: addAvatar(),
    },
    offer: {
      title: "Уютная квартира в центре города!",
      address: {
        lat: getLat(),
        lng: getLng(),
      },
      price: getOfferPrice(),
      type: getOfferType(),
      rooms: getPositiveInteger(),
      guests: getPositiveInteger(),
      checkin: getCheckinAndCheckoutTime(),
      checkout: getCheckinAndCheckoutTime(),
      features: getFeatures(),
      description:
        "Прекрасная светлая квартира, оборудованная всем самым необходимым.",
      photos: getPhotos(),
    },
    location: {
      lat: getLat(),
      lng: getLng(),
    },
  },
  {
    author: {
      avatar: addAvatar(),
    },
    offer: {
      title: "Уютная квартира в центре города!",
      address: {
        lat: getLat(),
        lng: getLng(),
      },
      price: getOfferPrice(),
      type: getOfferType(),
      rooms: getPositiveInteger(),
      guests: getPositiveInteger(),
      checkin: getCheckinAndCheckoutTime(),
      checkout: getCheckinAndCheckoutTime(),
      features: getFeatures(),
      description:
        "Прекрасная светлая квартира, оборудованная всем самым необходимым.",
      photos: getPhotos(),
    },
    location: {
      lat: getLat(),
      lng: getLng(),
    },
  },
  {
    author: {
      avatar: addAvatar(),
    },
    offer: {
      title: "Уютная квартира в центре города!",
      address: {
        lat: getLat(),
        lng: getLng(),
      },
      price: getOfferPrice(),
      type: getOfferType(),
      rooms: getPositiveInteger(),
      guests: getPositiveInteger(),
      checkin: getCheckinAndCheckoutTime(),
      checkout: getCheckinAndCheckoutTime(),
      features: getFeatures(),
      description:
        "Прекрасная светлая квартира, оборудованная всем самым необходимым.",
      photos: getPhotos(),
    },
    location: {
      lat: getLat(),
      lng: getLng(),
    },
  },
  {
    author: {
      avatar: addAvatar(),
    },
    offer: {
      title: "Уютная квартира в центре города!",
      address: {
        lat: getLat(),
        lng: getLng(),
      },
      price: getOfferPrice(),
      type: getOfferType(),
      rooms: getPositiveInteger(),
      guests: getPositiveInteger(),
      checkin: getCheckinAndCheckoutTime(),
      checkout: getCheckinAndCheckoutTime(),
      features: getFeatures(),
      description:
        "Прекрасная светлая квартира, оборудованная всем самым необходимым.",
      photos: getPhotos(),
    },
    location: {
      lat: getLat(),
      lng: getLng(),
    },
  },
  {
    author: {
      avatar: addAvatar(),
    },
    offer: {
      title: "Уютная квартира в центре города!",
      address: {
        lat: getLat(),
        lng: getLng(),
      },
      price: getOfferPrice(),
      type: getOfferType(),
      rooms: getPositiveInteger(),
      guests: getPositiveInteger(),
      checkin: getCheckinAndCheckoutTime(),
      checkout: getCheckinAndCheckoutTime(),
      features: getFeatures(),
      description:
        "Прекрасная светлая квартира, оборудованная всем самым необходимым.",
      photos: getPhotos(),
    },
    location: {
      lat: getLat(),
      lng: getLng(),
    },
  },
  {
    author: {
      avatar: addAvatar(),
    },
    offer: {
      title: "Уютная квартира в центре города!",
      address: {
        lat: getLat(),
        lng: getLng(),
      },
      price: getOfferPrice(),
      type: getOfferType(),
      rooms: getPositiveInteger(),
      guests: getPositiveInteger(),
      checkin: getCheckinAndCheckoutTime(),
      checkout: getCheckinAndCheckoutTime(),
      features: getFeatures(),
      description:
        "Прекрасная светлая квартира, оборудованная всем самым необходимым.",
      photos: getPhotos(),
    },
    location: {
      lat: getLat(),
      lng: getLng(),
    },
  },
  {
    author: {
      avatar: addAvatar(),
    },
    offer: {
      title: "Уютная квартира в центре города!",
      address: {
        lat: getLat(),
        lng: getLng(),
      },
      price: getOfferPrice(),
      type: getOfferType(),
      rooms: getPositiveInteger(),
      guests: getPositiveInteger(),
      checkin: getCheckinAndCheckoutTime(),
      checkout: getCheckinAndCheckoutTime(),
      features: getFeatures(),
      description:
        "Прекрасная светлая квартира, оборудованная всем самым необходимым.",
      photos: getPhotos(),
    },
    location: {
      lat: getLat(),
      lng: getLng(),
    },
  },
  {
    author: {
      avatar: addAvatar(),
    },
    offer: {
      title: "Уютная квартира в центре города!",
      address: {
        lat: getLat(),
        lng: getLng(),
      },
      price: getOfferPrice(),
      type: getOfferType(),
      rooms: getPositiveInteger(),
      guests: getPositiveInteger(),
      checkin: getCheckinAndCheckoutTime(),
      checkout: getCheckinAndCheckoutTime(),
      features: getFeatures(),
      description:
        "Прекрасная светлая квартира, оборудованная всем самым необходимым.",
      photos: getPhotos(),
    },
    location: {
      lat: getLat(),
      lng: getLng(),
    },
  },
  {
    author: {
      avatar: addAvatar(),
    },
    offer: {
      title: "Уютная квартира в центре города!",
      address: {
        lat: getLat(),
        lng: getLng(),
      },
      price: getOfferPrice(),
      type: getOfferType(),
      rooms: getPositiveInteger(),
      guests: getPositiveInteger(),
      checkin: getCheckinAndCheckoutTime(),
      checkout: getCheckinAndCheckoutTime(),
      features: getFeatures(),
      description:
        "Прекрасная светлая квартира, оборудованная всем самым необходимым.",
      photos: getPhotos(),
    },
    location: {
      lat: getLat(),
      lng: getLng(),
    },
  },
];

export default DATA;
