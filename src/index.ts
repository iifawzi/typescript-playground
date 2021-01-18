import { NumbersCollection } from "./collections/numbersCollections"
import { charsCollection } from "./collections/charsCollection";
import { LinkedList } from "./collections/LinkedList";



// const sorter = new Sorter(new charsCollection('azbdc'));
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(293);
linkedList.sort()
linkedList.print()