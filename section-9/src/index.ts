/// <reference types="@types/google.maps" />

import User from './User';
import Company from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

console.log(user);
console.log(company);

const customMap = new CustomMap('map');
customMap.addMarker(user); // this works despite the type is `User`, since `User` satisfies `Mappable` interface
customMap.addMarker(company);
