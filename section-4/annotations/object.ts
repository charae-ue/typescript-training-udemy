const profile = {
  name: 'Messi',
  age: 20,
  coords: {
    lat: 0,
    lng: 277,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// For object, to do annotation, need to do like this:
const { age }: { age: number } = profile;

// More example. Note that we just need to mirror the object structure
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
