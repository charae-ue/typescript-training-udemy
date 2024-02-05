import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([0, 15, -1, 7]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
