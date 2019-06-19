module.exports = class HashTable {
    constructor(length) {
        this.data = [];

        for (let i = 0; i < length; i++) {
            this.data.push(null);
        }
    }

    hash(key) {
        const A = (Math.sqrt(5) - 1) / 2;
        return Math.floor(this.data.length * ((key * A) % 1));
    }
}