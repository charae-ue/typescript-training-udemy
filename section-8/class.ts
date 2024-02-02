// The course author emphasize on the knowledge of `class` since we'll be using it a lot with `interface` to create reusable code in TS

class Vehicle {
  constructor(public color: string) {} // this is same as below, which is more verbose. Nice new knowledge!
  /**
   * constructor(color: string) {
   *    this.color = color;
   * }
   */

  protected honk(): void {
    console.log('Honk!');
  }
}

const vehicle = new Vehicle('red');
console.log(vehicle.color);

class Car extends Vehicle {
  // standard inheritance
  constructor(public weights: number, color: string) {
    // color is no field type, since it's just a function args, not a field of this child class\
    super(color); // remember that child constructor needs to call super's constructor too!
  }

  private drive(): void {
    console.log('Vroom vroom vroom, vroooooom!');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}
