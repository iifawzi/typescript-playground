import { sortAble } from "../interfaces/sotrable";

export class NumbersCollection implements sortAble {
  constructor(public data: number[]) { }

  get length() {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number) {
    return this.data[leftIndex] > this.data[rightIndex]
  }

  swap(leftIndex: number, rightIndex: number) {
    const temp = this.data[rightIndex];
    this.data[rightIndex] = this.data[leftIndex]
    this.data[leftIndex] = temp;
  }
}