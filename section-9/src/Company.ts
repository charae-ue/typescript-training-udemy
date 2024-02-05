import { faker } from '@faker-js/faker';

export default class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()), // why don't just use `as`, because TS doesn't allow, need to convert to `unknown` first
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
