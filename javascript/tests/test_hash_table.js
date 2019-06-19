const HashTable = require('../src/supporting/HashTable');

let testHash = () => {
    let table = new HashTable(6);

    let firstHash = table.hash(250899);
    let secondHash = table.hash(250899);

    console.assert(firstHash === secondHash, 'The hash function should return the same value when it is repeated on the same key.');
    console.assert(firstHash <= table.data.length, 'The hash function should return a key within the universe of the hash table\'s keys.');
}

let testHash2 = () => {
    let table = new HashTable(6);

    let firstHash = table.hash2(250899);
    let secondHash = table.hash2(250899);

    console.assert(firstHash === secondHash, 'The hash function should return the same value when it is repeated on the same key.');
    console.assert(firstHash <= table.data.length, 'The hash function should return a key within the universe of the hash table\'s keys.');
}

let testLinearProbe = () => {
    let table = new HashTable(6);

    let firstHash = table.linearProbeHash(250899, 3);
    let secondHash = table.linearProbeHash(250899, 3);

    console.assert(firstHash === secondHash, 'The hash function should return the same value when it is repeated on the same key.');
    console.assert(firstHash <= table.data.length, 'The hash function should return a key within the universe of the hash table\'s keys.');
}

let testQuadraticProbe = () => {
    let table = new HashTable(6);

    let firstHash = table.quadraticProbeHash(250899, 3);
    let secondHash = table.quadraticProbeHash(250899, 3);

    console.assert(firstHash === secondHash, 'The hash function should return the same value when it is repeated on the same key.');
    console.assert(firstHash <= table.data.length, 'The hash function should return a key within the universe of the hash table\'s keys.');
}

let testDoubleHash = () => {
    let table = new HashTable(6);

    let firstHash = table.doubleHash(250899, 3);
    let secondHash = table.doubleHash(250899, 3);

    console.assert(firstHash === secondHash, 'The hash function should return the same value when it is repeated on the same key.');
    console.assert(firstHash <= table.data.length, 'The hash function should return a key within the universe of the hash table\'s keys.');
}

testHash();
testHash2();
testLinearProbe();
testQuadraticProbe();
testDoubleHash();