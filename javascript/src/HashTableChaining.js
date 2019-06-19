const HashTable = require('./supporting/HashTable');
const LinkedList = require('./LinkedList');

module.exports = class HashTableChaining extends HashTable {
    constructor(length) {
        super(length);

        this.data = [];

        for (let i = 0; i < length; i++) {
            this.data.push(new LinkedList);
        }
    }

    search(k) {
        let key = this.hash(k);
        let list = this.data[key];

        return list.search(k);
    }

    insert(x) {
        let key = this.hash(x.key);
        let list = this.data[key];

        list.insert(x);
    }

    delete(x) {
        let key = this.hash(x.key);
        let list = this.data[key];

        list.delete(x);
    }
}