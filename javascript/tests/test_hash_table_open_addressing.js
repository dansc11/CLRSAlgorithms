const HashTableOpenAddressing = require('../src/HashTableOpenAddressing');
const HashTableElement = require('../src/supporting/HashTableElement');

let testInsert = () => {
    let table = new HashTableOpenAddressing(6);

    // Both keys hash to 1 with 0 offset
    let x = new HashTableElement(2);
    let y = new HashTableElement(7);
    let z = new HashTableElement(2);

    table.insert(x);
    console.assert(table.data[1] === x, 'Position 1 in the table should point to x.');

    table.insert(y);
    console.assert(table.data[1] === x, 'Position 1 in the table should still point to x after inserting y.');
    console.assert(table.data[5] === y, 'Position 5 in the table should point to y.');

    table.insert(z);
    console.assert(table.data[3] === z, 'Position 3 in the table should point to z.')
    console.assert(table.data[1] === x, 'Position 1 in the table should still point to x after inserting z.');
    console.assert(table.data[5] === y, 'Position 5 in the table should still point to y after inserting z.');
}

let testSearch = () => {
    let table = new HashTableOpenAddressing(6);

    // Both keys hash to 1
    let x = new HashTableElement(2);
    let y = new HashTableElement(7);

    table.insert(x);
    table.insert(y);

    console.assert(table.search(2) === x, 'Searching for x\'s key should return x.');
    console.assert(table.search(7) === y, 'Searching for y\'s key should return y.');
}

let testDelete = () => {
    let table = new HashTableOpenAddressing(6);

    // Both keys hash to 1
    let x = new HashTableElement(2);
    let y = new HashTableElement(7);

    table.insert(x);
    table.insert(y);

    console.assert(table.data[5] === y, 'Position 5 should point to y before y is deleted.');

    table.delete(y);

    console.assert(table.search(7) === null, 'The table should return null when searching for y\'s key after deleting y.');

    table.insert(y);
    console.assert(table.data[5] === y, 'y should be re-inserted at position 5.');
}

testInsert();
testSearch();
testDelete();