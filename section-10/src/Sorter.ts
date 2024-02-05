// ! No longer being used, can be removed
export interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

/**
 * Why abstract class instead of just using interface?
 * Because the classes are kinda related. We use abstract class when we are trying to build up
 * a definition of an object, since it couples classes together.
 * Meanwhile, we use interface if we have different objects that we want to work together (like the user and company example before)
 */
export abstract class Sorter {
  abstract length: number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;

  sort(): void {
    const { length } = this;

    // this.collection.

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
