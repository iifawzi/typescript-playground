import { sortAble } from "../interfaces/sotrable";

export class charsCollection implements sortAble {
  constructor(public data: string) { }

  get length() {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number) {
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
  }

  swap(leftIndex: number, rightIndex: number) {
    const arrOfChar = this.data.split('');
    const temp = arrOfChar[rightIndex];
    arrOfChar[rightIndex] = arrOfChar[leftIndex]
    arrOfChar[leftIndex] = temp;
    this.data = arrOfChar.join('');
  }
}