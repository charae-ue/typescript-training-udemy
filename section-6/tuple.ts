// The course author said tuple usage is quite niche (one example is when working with Excel file), and I kinda agree. Don't work with them much, but probably cos of I don't know and how to use it
// For example, in most cases, it's better to use object rather than tuple, e.g.

const carSpecs: [number, number] = [400, 3569]; // not that useful since won't know what does the number represent

// instead:
const carStats: { horsePower: number; weight: number } = {
  horsePower: 400,
  weight: 3456,
};

// Reference: https://type-level-typescript.com/arrays-and-tuples
// Basically can be viewed as list of types. Differs from array in that it is a list of type, and its value is *exact*
type Empty = [];
type One = [1];
type Two = [1, '2']; // types can be different
type Three = [1, '2', 1]; // tuples can contain duplicates

// Can access the value using index, just like in normal array
type SomeTuple = ['Bob', 28];

type Name = SomeTuple[0];
type Age = SomeTuple[1];

// Also possible to simultaneously read several keys from a tuple, by using a uniuon of number literal types
type NameOrAge = SomeTuple[0 | 1];

// Can simultaneously read all indices in a tuple `T` with `T[number]`:
// ? helpful for getting the union of all values from tuples, like how we'd do `Obj[keyof Obj]` in objects
type Values = SomeTuple[number]; // `T[number]` will turn a list into a set at the type level

// Usage of `keyof` is kinda impractical, since it'll return the names of all methods of Array prototype too (e.g. reduce, filter, map, etc.)
type Keys = keyof SomeTuple;
const key: Keys = 'map'; // works since map is also return

// Optional indices
type OptTuple = [string, number?];

const tuple: OptTuple = ['Bob', 28];
const tuple2: OptTuple = ['Bob'];
const tuple3: OptTuple = ['Bob', undefined]; // Explicitly set it to `undefined` also works

// Tuple as function arguments 🤯
type UserTuple = [name: string, age?: number, ...addresses: string[]];

// is equivalent to:
function createUser(name: string, age?: number, ...addresses: string[]) {}

// so we could've used `UserTuple` instead for the same function
function createUserTuple(...args: UserTuple) {
  const [name, age, ...addresses] = args;
  // types: string, number, string[]
}

createUserTuple('Gabriel Jesus', 28, 'Arsenal', 'London');
const test = createUserTuple('Bob'); // `age` is optional, so it can be empty
createUser('Alice', 28, false); // ! Error: Argument of type 'boolean' is not assignable to parameter of type 'string'.

// can be convenient if we wanna share type of params between several different function, e.g.
function updateUser(userId: string, ...args: UserTuple) {} // without tuple, I think we would have to declare the args again?

// or if the function have several signatures
type Fullname =
  | [first: string, last: string]
  | [first: string, middle: string, last: string];

function createUserFullname(...name: Fullname) {}

createUserFullname('Gabriel', 'Jesus');
createUserFullname('Gabriel', 'Barbosa', 'Jesus');
createUserFullname('Gabriel Jesus'); // ! Too little args
createUserFullname('Gabriel', 'Barbosa', 'Jesus', 'Medley'); // ! Too many args
