
export function filterAdverts(adverts) {
  const slicedAdverts = adverts.slice(0, 10);
  let filteredAdverts = slicedAdverts;
  const accommodationTypeSelector = document.querySelector('#housing-type');
  const accommodationPriceSelector = document.querySelector('#housing-price');
  const accommodationRoomsSelector = document.querySelector('#housing-rooms');
  const accommodationGuestsSelector = document.querySelector('#housing-guests');
  const accommodationFilter = document.querySelector('.map__filters');
  accommodationFilter.addEventListener('change', accommodationChangeHandler);
  function accommodationChangeHandler(event) {
    switch (accommodationTypeSelector.value) {
      //   case 'any': return slicedAdverts;
      case 'bungalow': filteredAdverts = filteredAdverts.filter((el) => el.offer.type === 'bungalow');
        break;
      case 'flat': filteredAdverts = filteredAdverts.filter((el) => el.offer.type === 'flat');
        break;
      case 'hotel': filteredAdverts = filteredAdverts.filter((el) => el.offer.type === 'hotel');
        break;
      case 'house': filteredAdverts = filteredAdverts.filter((el) => el.offer.type === 'house');
        break;
      case 'palace': filteredAdverts = filteredAdverts.filter((el) => el.offer.type === 'palace');
        break;
    }
    switch (accommodationPriceSelector.value) {
      //   case 'any': console.log(filteredAdverts);
      //     break;
      case 'middle': filteredAdverts = filteredAdverts = filteredAdverts.filter((el) => el.offer.price >= 10000 && el.offer.price < 50000);
        break;
      case 'low': filteredAdverts = filteredAdverts.filter((el) => el.offer.price < 10000);
        break;
      case 'high': filteredAdverts = filteredAdverts.filter((el) => el.offer.price >= 50000);
        break;
    }
    switch (accommodationRoomsSelector.value) {
      // case 'any': console.log(slicedAdverts);
      //   break;
      case '1': filteredAdverts = filteredAdverts.filter((el) => el.offer.rooms === 1);
        break;
      case '2': filteredAdverts = filteredAdverts.filter((el) => el.offer.rooms === 2);
        break;
      case '3': filteredAdverts = filteredAdverts.filter((el) => el.offer.rooms === 3);
        break;
    }
    switch (accommodationGuestsSelector.value) {
      // case 'any': console.log(slicedAdverts);
      //   break;
      case '2': console.log(filteredAdverts = filteredAdverts.filter((el) => el.offer.guests === 2));
        break;
      case '1': console.log(filteredAdverts = filteredAdverts.filter((el) => el.offer.guests === 1));
        break;
      case '0': console.log(filteredAdverts = filteredAdverts.filter((el) => el.offer.guests === 0));
        break;
    }
    if (event.target.checked === true) {
      filteredAdverts = filteredAdverts.filter((el) => el.offer.features);
      for (const key of filteredAdverts) {
        const keys = key.offer.features;
        console.log(keys.filter((el) => el.includes(event.target.value)));
      }
    }


    //   //По удобствам

    //   const accommodationFeatures = document.querySelector('#housing-features');
    //   accommodationFeatures.addEventListener('change', accommodationFeaturesChangeHandler);
    //   function accommodationFeaturesChangeHandler(event) {
    //     if (event.target.checked === true) {
    //       const features = slicedAdverts.filter((el) => el.offer.features) ;
    //       for (const key of features) {
    //         const keys = key.offer.features;
    //         console.log(keys.filter((el)=> el.includes(event.target.value))) ;
    //       }
    //     }
    //   }
  }
}
