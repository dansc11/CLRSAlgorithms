const HashTable = require('./supporting/HashTable');

module.exports = class DirectAddressTable extends HashTable {
    search(k) {
        return this.data[k];
    }

    insert(x) {
        this.data[x.key] = x;
    }

    delete(x) {
        this.data[x.key] = null;
    }
}