import { sortAble } from "../interfaces/sotrable";

export class NumbersCollection implements sortAble {
  constructor(public collection: number[]) { }

  get length() {
    return this.collection.length;
  }

  compare(leftIndex: number, rightIndex: number) {
    return this.collection[leftIndex] > this.collection[rightIndex]
  }

  swap(leftIndex: number, rightIndex: number) {
    const temp = this.collection[rightIndex];
    this.collection[rightIndex] = this.collection[leftIndex]
    this.collection[leftIndex] = temp;
  }
}