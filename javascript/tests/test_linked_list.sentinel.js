const LinkedListSentinel = require('../src/LinkedListSentinel')
const LinkedListElement = require('../src/LinkedListElement')

let test = () => {
    let list = new LinkedListSentinel();

    let x = new LinkedListElement(3);
    list.insert(x);
    console.assert(x.next === list.nil, 'x.next should be null until the next element is inserted.');
    console.assert(x.prev === list.nil, 'x.prev should be null when it is the head of the list.');

    let y = new LinkedListElement(7);
    list.insert(y);
    console.assert(y.next === x, 'y.next should be x.');
    console.assert(y.prev === list.nil, 'y.prev should be null since it is the head of the list.');
    console.assert(x.prev === y, 'x.prev should be y when y has been added to the list.');

    let z = new LinkedListElement(24);
    list.insert(z);
    console.assert(z.next === y, 'z.next should be y.');
    console.assert(z.prev === list.nil, 'z.prev should be null since it is the head of the list.');
    console.assert(y.prev === z, 'y.prev should be z when z has been added to the list.');

    console.assert(list.search(3) === x, 'List should return x when searching for 3.');
    console.assert(list.search(7) === y, 'List should return y when searching for 7.');
    console.assert(list.search(24) === z, 'List should return z when searching for 24.');
    console.assert(list.search(43) === list.nil, 'List should return null when searching for 43.');

    list.delete(y);
    console.assert(z.next === x, 'z.next should be x after deleting y.');
    console.assert(x.prev === z, 'x.prev should be z after deleting y.');

    list.delete(z);
    console.assert(x.next === list.nil, 'x.next should be null after deleting z.');
    console.assert(x.prev === list.nil, 'x.prev should be null after deleting z.');
}

test();