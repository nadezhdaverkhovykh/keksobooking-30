import {
  used,
  AddAvatar,
  offerPrice,
  offerType,
  PositiveInteger,
  checkInAndcheckOutTime,
  features,
  photos,
  lat,
  lng,
} from "./util.js";

const DATA = [
  {
    author: {
      avatar: AddAvatar(),
    },
    offer: {
      title: "Уютная квартира в центре города!",
      address: {
        lat: lat(),
        lng: lng(),
      },
      price: offerPrice(),
      type: offerType(),
      rooms: PositiveInteger(),
      guests: PositiveInteger(),
      checkin: checkInAndcheckOutTime(),
      checkout: checkInAndcheckOutTime(),
      features: features(),
      description:
        "Прекрасная светлая квартира, оборудованная всем самым необходимым.",
      photos: photos(),
    },
    location: {
      lat: lat(),
      lng: lng(),
    },
  },
  {
    author: {
      avatar: AddAvatar(),
    },
    offer: {
      title: "Уютная квартира в центре города!",
      address: {
        lat: lat(),
        lng: lng(),
      },
      price: offerPrice(),
      type: offerType(),
      rooms: PositiveInteger(),
      guests: PositiveInteger(),
      checkin: checkInAndcheckOutTime(),
      checkout: checkInAndcheckOutTime(),
      features: features(),
      description:
        "Прекрасная светлая квартира, оборудованная всем самым необходимым.",
      photos: photos(),
    },
    location: {
      lat: lat(),
      lng: lng(),
    },
  },
  {
    author: {
      avatar: AddAvatar(),
    },
    offer: {
      title: "Уютная квартира в центре города!",
      address: {
        lat: lat(),
        lng: lng(),
      },
      price: offerPrice(),
      type: offerType(),
      rooms: PositiveInteger(),
      guests: PositiveInteger(),
      checkin: checkInAndcheckOutTime(),
      checkout: checkInAndcheckOutTime(),
      features: features(),
      description:
        "Прекрасная светлая квартира, оборудованная всем самым необходимым.",
      photos: photos(),
    },
    location: {
      lat: lat(),
      lng: lng(),
    },
  },
  {
    author: {
      avatar: AddAvatar(),
    },
    offer: {
      title: "Уютная квартира в центре города!",
      address: {
        lat: lat(),
        lng: lng(),
      },
      price: offerPrice(),
      type: offerType(),
      rooms: PositiveInteger(),
      guests: PositiveInteger(),
      checkin: checkInAndcheckOutTime(),
      checkout: checkInAndcheckOutTime(),
      features: features(),
      description:
        "Прекрасная светлая квартира, оборудованная всем самым необходимым.",
      photos: photos(),
    },
    location: {
      lat: lat(),
      lng: lng(),
    },
  },
  {
    author: {
      avatar: AddAvatar(),
    },
    offer: {
      title: "Уютная квартира в центре города!",
      address: {
        lat: lat(),
        lng: lng(),
      },
      price: offerPrice(),
      type: offerType(),
      rooms: PositiveInteger(),
      guests: PositiveInteger(),
      checkin: checkInAndcheckOutTime(),
      checkout: checkInAndcheckOutTime(),
      features: features(),
      description:
        "Прекрасная светлая квартира, оборудованная всем самым необходимым.",
      photos: photos(),
    },
    location: {
      lat: lat(),
      lng: lng(),
    },
  },
  {
    author: {
      avatar: AddAvatar(),
    },
    offer: {
      title: "Уютная квартира в центре города!",
      address: {
        lat: lat(),
        lng: lng(),
      },
      price: offerPrice(),
      type: offerType(),
      rooms: PositiveInteger(),
      guests: PositiveInteger(),
      checkin: checkInAndcheckOutTime(),
      checkout: checkInAndcheckOutTime(),
      features: features(),
      description:
        "Прекрасная светлая квартира, оборудованная всем самым необходимым.",
      photos: photos(),
    },
    location: {
      lat: lat(),
      lng: lng(),
    },
  },
  {
    author: {
      avatar: AddAvatar(),
    },
    offer: {
      title: "Уютная квартира в центре города!",
      address: {
        lat: lat(),
        lng: lng(),
      },
      price: offerPrice(),
      type: offerType(),
      rooms: PositiveInteger(),
      guests: PositiveInteger(),
      checkin: checkInAndcheckOutTime(),
      checkout: checkInAndcheckOutTime(),
      features: features(),
      description:
        "Прекрасная светлая квартира, оборудованная всем самым необходимым.",
      photos: photos(),
    },
    location: {
      lat: lat(),
      lng: lng(),
    },
  },
  {
    author: {
      avatar: AddAvatar(),
    },
    offer: {
      title: "Уютная квартира в центре города!",
      address: {
        lat: lat(),
        lng: lng(),
      },
      price: offerPrice(),
      type: offerType(),
      rooms: PositiveInteger(),
      guests: PositiveInteger(),
      checkin: checkInAndcheckOutTime(),
      checkout: checkInAndcheckOutTime(),
      features: features(),
      description:
        "Прекрасная светлая квартира, оборудованная всем самым необходимым.",
      photos: photos(),
    },
    location: {
      lat: lat(),
      lng: lng(),
    },
  },
  {
    author: {
      avatar: AddAvatar(),
    },
    offer: {
      title: "Уютная квартира в центре города!",
      address: {
        lat: lat(),
        lng: lng(),
      },
      price: offerPrice(),
      type: offerType(),
      rooms: PositiveInteger(),
      guests: PositiveInteger(),
      checkin: checkInAndcheckOutTime(),
      checkout: checkInAndcheckOutTime(),
      features: features(),
      description:
        "Прекрасная светлая квартира, оборудованная всем самым необходимым.",
      photos: photos(),
    },
    location: {
      lat: lat(),
      lng: lng(),
    },
  },
  {
    author: {
      avatar: AddAvatar(),
    },
    offer: {
      title: "Уютная квартира в центре города!",
      address: {
        lat: lat(),
        lng: lng(),
      },
      price: offerPrice(),
      type: offerType(),
      rooms: PositiveInteger(),
      guests: PositiveInteger(),
      checkin: checkInAndcheckOutTime(),
      checkout: checkInAndcheckOutTime(),
      features: features(),
      description:
        "Прекрасная светлая квартира, оборудованная всем самым необходимым.",
      photos: photos(),
    },
    location: {
      lat: lat(),
      lng: lng(),
    },
  },
];

export default DATA;
