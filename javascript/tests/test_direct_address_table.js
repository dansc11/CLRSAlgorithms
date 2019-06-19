const DirectAddressTable = require('../src/DirectAddressTable');
const HashTableElement = require('../src/supporting/HashTableElement');

let test = () => {
    let table = new DirectAddressTable(3);
    let x = new HashTableElement(3);

    table.insert(x);
    let key = x.key;

    console.assert(table.search(key) === x, 'Searching a direct address table by x\'s key should return x.');

    table.delete(x)
    console.assert(table.search(key) === null, 'Searching a direct address table by x\'s key should return null after deleting x from the table.');
}

test();