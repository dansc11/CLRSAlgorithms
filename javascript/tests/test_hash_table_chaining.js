const HashTableChaining = require('../src/HashTableChaining');
const HashTableElement = require('../src/supporting/HashTableElement');
const LinkedList = require('../src/LinkedList');

let testInsert = () => {
    let table = new HashTableChaining(6);

    console.assert(table.data[1] instanceof LinkedList, 'Table element should be a linked list.');
    console.assert(table.data[1].head === null, 'Linked list should be empty on creation.');

    // Both keys hash to 1
    let x = new HashTableElement(2);
    let y = new HashTableElement(7);

    table.insert(x);
    console.assert(table.data[1].head === x, 'Linked list head should point to the last inserted element at this key.');

    table.insert(y);
    console.assert(table.data[1].head === y, 'Linked list head should point to the last inserted element at this key.');
    console.assert(y.next === x, 'y.next should point to x.');
    console.assert(x.prev === y, 'x.prev should point to y.');
}

let testSearch = () => {
    let table = new HashTableChaining(6);

    // Both keys hash to 1
    let x = new HashTableElement(2);
    let y = new HashTableElement(7);

    table.insert(x);
    table.insert(y);

    console.assert(table.search(2) === x, 'Searching for x\'s key should return x.');
    console.assert(table.search(7) === y, 'Searching for y\'s key should return y.');
}

let testDelete = () => {
    let table = new HashTableChaining(6);

    // Both keys hash to 1
    let x = new HashTableElement(2);
    let y = new HashTableElement(7);

    table.insert(x);
    table.insert(y);

    console.assert(table.data[1].head === y, 'The list head should point to y before y is deleted.');

    table.delete(y);

    console.assert(table.data[1].head === x, 'The list head should point to x after y is deleted.');
    console.assert(table.search(7) === null, 'The table should return null when searching for y\'s key after deleting y.');
}

testInsert();
testSearch();
testDelete();