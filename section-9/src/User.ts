import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export default class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()), // why don't just use `as`, because TS doesn't allow, need to convert to `unknown` first
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
