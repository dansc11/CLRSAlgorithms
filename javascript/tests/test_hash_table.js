const HashTable = require('../src/supporting/HashTable');

let testHashFunction = () => {
    let table = new HashTable(6);

    let firstHash = table.hash(2508994124323453);
    let secondHash = table.hash(2508994124323453);

    console.assert(firstHash === secondHash, 'The hash function should return the same value when it is repeated on the same key.');
    console.assert(firstHash <= table.data.length, 'The hash function should return a key within the universe of the hash table\'s keys.');
}

testHashFunction();