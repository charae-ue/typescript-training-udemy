class Boat {
  color = 'red';

  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError
  pilot(): void {
    throw new Error();
    console.log('pilot!');
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;

  desc.value = function () {
    try {
      method();
    } catch (err) {
      console.error('Error');
    }
  };
}

new Boat().pilot();
