/// <reference types="@types/google.maps" />

import User from './User';
import Company from './Company';

const user = new User();
const company = new Company();

console.log(user);
console.log(company);

const mapDiv = document.getElementById('map');

new google.maps.Map(mapDiv as HTMLElement, {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
