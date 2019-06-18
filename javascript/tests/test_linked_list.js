const LinkedList = require('../src/LinkedList')
const LinkedListElement = require('../src/LinkedListElement')

let test = () => {
    let list = new LinkedList();
    console.assert(list.head === null, 'List head should be null after creation.');

    let x = new LinkedListElement(3);
    list.insert(x);
    console.assert(list.head === x, 'List head should point to x after it is inserted.');
    console.assert(x.next === null, 'x.next should be null until the next element is inserted.');
    console.assert(x.prev === null, 'x.prev should be null when it is the head of the list.');

    let y = new LinkedListElement(7);
    list.insert(y);
    console.assert(list.head === y, 'List head should point to y after it is inserted.');
    console.assert(y.next === x, 'y.next should be x.');
    console.assert(y.prev === null, 'y.prev should be null since it is the head of the list.');
    console.assert(x.prev === y, 'x.prev should be y when y has been added to the list.');

    let z = new LinkedListElement(24);
    list.insert(z);
    console.assert(list.head === z, 'List head should point to z after it is inserted.');
    console.assert(z.next === y, 'z.next should be y.');
    console.assert(z.prev === null, 'z.prev should be null since it is the head of the list.');
    console.assert(y.prev === z, 'y.prev should be z when z has been added to the list.');

    console.assert(list.search(3) === x, 'List should return x when searching for 3.');
    console.assert(list.search(7) === y, 'List should return y when searching for 7.');
    console.assert(list.search(24) === z, 'List should return z when searching for 24.');
    console.assert(list.search(43) === null, 'List should return null when searching for 43.');

    list.delete(y);
    console.assert(z.next === x, 'z.next should be x after deleting y.');
    console.assert(x.prev === z, 'x.prev should be z after deleting y.');

    list.delete(z);
    console.assert(list.head === x, 'List head should point to x after deleting z.');
    console.assert(x.next === null, 'x.next should be null after deleting z.');
    console.assert(x.prev === null, 'x.prev should be null after deleting z.');
}

test();