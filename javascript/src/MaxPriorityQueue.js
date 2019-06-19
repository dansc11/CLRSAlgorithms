const MaxHeap = require('./MaxHeap');

module.exports = class MaxPriorityQueue extends MaxHeap {
    heapExtractMax() {
        if (this.heapSize < 1) {
            throw "heap underflow";
        }

        // The max is the first element
        let max = this.data[1];

        // Re-sort the heap
        this.data[1] = this.data[this.heapSize];
        this.heapSize--;
        this.maxHeapify(1);

        return max;
    }

    heapIncreaseKey(index, newKey) {
        let target = this.data[index];

        if (newKey < target) {
            throw "new key is smaller";
        }

        target = newKey;

        // If the parent is smaller than the new key, swap their positions
        while (index > 1 && this.data[this.parent(index)] < this.data[index]) {
            let parent = this.data[this.parent(index)];
            this.data[this.parent(index)] = this.data[index];
            this.data[index] = parent;

            // Move up the tree until the new key is in the right position
            index = this.parent(index);
        }
    }

    maxHeapInsert(key) {
        this.heapSize++;

        // Ensure that any new key is bigger than the existing value
        this.data[this.heapSize] = Number.NEGATIVE_INFINITY;

        this.heapIncreaseKey(this.heapSize, key);
    }
}