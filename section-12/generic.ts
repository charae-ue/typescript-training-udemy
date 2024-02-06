class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(['a', 'b', 'c']);
new ArrayOfAnything<number>([1, 100, -234]);

type footballTeam = {
  name: string;
  stadium: string;
};
const footballTeams = new ArrayOfAnything<footballTeam>([
  { name: 'Man City', stadium: 'Etihad Stadium' },
  { name: 'Wolves', stadium: 'Wolverhampton Stadium' },
]);

// Example of function with generics
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['a', 'b', 'c']); // no need square bracket
printAnything<number>([1, 2, 3]); // no need square bracket

printAnything([1, 2, 3]); // also works. Though author recommended to add the type annotation for generic, to help with catching error

// Generic Constraints

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

function printHousesOrCars<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print(); // ! will not work because we could pass an array of number and the print() method is not available there
  }
}

// instead, do this:

// Declare an interface to be extended by the generic, so that to check that the interface is satisfied
interface Printable {
  print(): void;
}

function printHousesOrCars2<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print(); // * Ta-da!
  }
}
