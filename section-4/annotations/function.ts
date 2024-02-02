/**
 * Annotation: we tell TS what's the function params type and return type is
 * Inference: TS can only infer the return type. 
 * 
 * However, if no return type of function is annotated, bug might occur since TS might infer it differently from what we want. 
 * E.g. `subtract` function
 */

const add = (a: number, b: number): number => {
  return a + b;
}

const substract = (a: number, b: number) => {
  a - b; // Would infer it as `void` instead, even though we would want the return type to be `number`
}

const raise = (err: string): never => {
  throw new Error(err); // this function returns `never`, since this function never returns anything
}

// Destructuring with annotations
// Great since we can straight away use the date and weather variable (no need to like use dot notation to access) 
const todaysWeather = {
  date: new Date(),
  weather: 'cloudy'
};

const logWeather = ({date, weather}: {date: Date, weather: string}) => {
  console.log(`${date} - ${weather}`);
}

logWeather(todaysWeather);
