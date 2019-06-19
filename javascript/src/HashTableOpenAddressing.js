const HashTable = require('./supporting/HashTable');

module.exports = class HashTableOpenAddressing extends HashTable {
    insert(x) {
        let offset = 0;

        do {
            let key = this.doubleHash(x.key, offset);

            if (this.data[key] === null || this.data[key] === "DELETED") {
                this.data[key] = x;
                return key;
            }

            offset++;
        } while (offset <= this.data.length);

        throw "hash table overflow";
    }

    delete(x) {
        let offset = 0;

        do {
            let key = this.doubleHash(x.key, offset);

            if (this.data[key] === x) {
                this.data[key] = "DELETED";
            }

            offset++;
        } while (offset <= this.data.length);
    }

    search(searchKey) {
        let offset = 0;
        let key;

        do {
            key = this.doubleHash(searchKey, offset);

            if (this.data[key] !== null && this.data[key].key === searchKey) {
                return this.data[key];
            }

            offset++;
        } while (offset <= this.data.length && this.data[key] !== null);

        return null;
    }
}