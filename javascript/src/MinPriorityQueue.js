const MinHeap = require('./MinHeap');

module.exports = class MinPriorityQueue extends MinHeap {
    heapExtractMin() {
        if (this.heapSize < 1) {
            throw "heap underflow";
        }

        // The max is the first element
        let min = this.data[1];

        // Re-sort the heap
        this.data[1] = this.data[this.heapSize];
        this.heapSize--;
        this.minHeapify(1);

        return min;
    }

    heapDecreaseKey(index, newKey) {
        let target = this.data[index];

        if (newKey > target) {
            throw "new key is bigger";
        }

        target = newKey;

        // If the parent is bigger than the new key, swap their positions
        while (index > 1 && this.data[this.parent(index)] > this.data[index]) {
            let parent = this.data[this.parent(index)];
            this.data[this.parent(index)] = this.data[index];
            this.data[index] = parent;

            // Move up the tree until the new key is in the right position
            index = this.parent(index);
        }
    }

    minHeapInsert(key) {
        this.heapSize++;

        // Ensure that any new key is bigger than the existing value
        this.data[this.heapSize] = Number.POSITIVE_INFINITY;

        this.heapDecreaseKey(this.heapSize, key);
    }
}