const Array = require('./Array');

module.exports = class MaxHeap extends Array {
    constructor(array) {
        super(array);
        this.heapSize = Object.keys(this.data).length;
    }

    parent(i) {
        return Math.floor(i / 2);
    }

    left(i) {
        return 2 * i;
    }

    right(i) {
        return 2 * i + 1;
    }
}