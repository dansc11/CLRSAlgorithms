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

    hash2(key) {
        const A = (Math.sqrt(19) - 1) / 2;
        return Math.floor(this.data.length * ((key * A) % 1));
    }

    linearProbeHash(key, offset) {
        return (this.hash(key) + offset) % this.data.length;
    }

    quadraticProbeHash(key, offset) {
        const a = 0.5;
        const b = 7;

        return (a * Math.pow(offset, 2) + b * offset + this.hash(key)) % this.data.length;
    }

    doubleHash(key, offset) {
        return (this.hash(key) + offset * this.hash2(key)) % this.data.length;
    }
}