// # Type Annotation
let oranges: number = 5;

oranges = 10;
oranges = 'test'; // Type 'string' is not assignable to type 'number' 

// Object literal
type Point = {
  x: number;
  y: number;
}

let point: Point = {x: 10, y: 11,}

// Function type annotation
const logNumber: (num: number) => number = (num: number) => {
  return num;
}

// but isn't it same as:
const logNumber2 = (num: number) => num;
// what I do have to take note is when to use the type annotation, or if there's no need to use it normally 

// # Type Inference
// If declaration and initialization are on the same line, TS will figure out (infer) the type for us
// e.g.
let color = 'red'; // let color: string

// ? Always rely on type inference, except when:
// 1) declare a variable on one line then initialize it later
let words = ['red', 'green', 'blue'];
let foundRed: boolean; // without type annotation here, the var data type is `any`. Alternatively we can use type inference, e.g. let foundRed = false

for (const word of words) {
  if (word === 'red') {
    foundRed = true;
  }
}

// 2) want a variable to have a type that can't be inferred
// ? e.g. when it's not possible for TS to infer the type automatically. For instance, `numberAboveZero` is initialized
// ? as `boolean` (false), but if number > 0 is found, we want its value to be that number.

let numbers = [-10, -1, 25];
let numberAboveZero: boolean | number = false; // We definitely can't rely on inference here since it will infer as boolean only

for (const number of numbers) {
  if (number > 0) {
    numberAboveZero = number; // This won't be possible unless we define the type via annotation
  }
}

// 3) a function returns `any` type and we need to clarify the value
const json = '{"x": 10, "y": 15}';
const coords = JSON.parse(json); // ! problem is JSON.parse returns `any` type, so without annotation, TS won't do the checking!
console.log(coords.dsaf); // ! Raise no error!

// The fix:
const coordinate: {x: number, y: number} = JSON.parse(json);
console.log(coordinate.dsaf); // Raise error, TS works as usual