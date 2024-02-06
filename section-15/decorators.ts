class Boat {
  color = 'red';

  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError('Pilot error hah!')
  pilot(): void {
    throw new Error();
    console.log('pilot!');
  }
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

new Boat().pilot();
