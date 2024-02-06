@classDecorator
class Boat {
  @testColor
  color = 'red';

  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError('Pilot error hah!')
  pilot(): void {
    throw new Error();
    console.log('pilot!');
  }

  steer(
    @parameterDecorator direction: string,
    @parameterDecorator speed: string
  ): void {
    if (direction === 'forward') {
      console.log('Forward we go!');
    } else if (direction === 'backward') {
      console.log(`We're so back!`);
    }
  }
}

// Can use Function (as type) or typeof Boat, which would be the reference to the constructor of the Boat
function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

// use in params of function
function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

// Running this will get undefined, since decorator can't have direct access to property in class
function testColor(target: any, key: string): void {
  console.log(target);
  console.log(target.color);
}

// Decorator factory, allow us to pass args to decorator (e.g. for passing log error message)
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    // console.log(desc)
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (err) {
        console.error(errorMessage);
      }
    };
  };
}

// new Boat().pilot();
