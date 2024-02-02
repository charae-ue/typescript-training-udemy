const carMakers = ['toyota', 'proton', 'perodua'];

// For array, TS can help with:
// 1. Infer type when extracting values from array
const car = carMakers[0];
//    ^?

// 2. Prevent from adding incompatible values to array
carMakers.push(100); // Argument of type 'number' is not assignable to parameter of type 'string'. So need to declare additional type if needed

// 3. Help with `map`, `forEach`, `reduce` built-in functions. Useful for autocomplete.
// * But I think without it also work though 🤔
carMakers.map((car: string): string => {
  return car.toUpperCase(); // get access to autocomplete here. Neat!
});

// 4. Flexible type arrays
const dates: (Date | string)[] = []; // Inference won;t work if empt
dates.push(new Date());
dates.push('12/01/2024');
dates.push(100); // Argument of type 'number' is not assignable to parameter of type 'string | Date'.
